var dealModel = require('../models/deal');
var promobugsService = require('../services/promobugs');
var emailService = require('../services/email');
var _ = require('lodash');
var Promise = require('bluebird');

var promobugsJob = function(job, done) {

  function processDealsCrawled(data) {
    var threadIds = _.pluck(data, 'threadId');
    return Promise.all([dealModel.findAsync({threadId: {$in: threadIds}}), data]);
  }

  function filterOnlyNewThreads(threadsFinded, threads) {
    var result = _.filter(threads, function(thread) {
      return !_.find(threadsFinded, {threadId: thread.threadId}) ? thread : null;
    });

    return Promise.resolve(result);
  }

  function insertNewThreads(threads) {
    return dealModel.create(threads);
  }

  function sendEmails(threads) {
    var promises = [];

    if(threads) {
      threads.forEach(function(thread) {
        promises.push(emailService.send(thread));
      });
    }

    return Promise.all(promises);
  }

  promobugsService.getDeals()
    .then(processDealsCrawled)
    .spread(filterOnlyNewThreads)
    .then(insertNewThreads)
    .then(sendEmails)
    .then(function(data) {
      console.log('enviou ' + data.length + ' email(s)');
      done();
    })
    .catch(function(err) {
      console.log(err);
    });
};

module.exports = promobugsJob;
