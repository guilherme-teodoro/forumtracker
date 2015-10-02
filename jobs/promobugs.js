var dealModel = require('../models/deal');
var promobugsService = require('../services/promobugs');

var promobugsJob = function(job, done) {
  promobugsService.getDeals().then(function(data) {
    console.log(data);  
    done();
  });
};

module.exports = promobugsJob;
