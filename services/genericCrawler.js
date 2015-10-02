var fs = require('fs');
var jsdom = require('jsdom');
var Promise = require('bluebird');

var jquery = fs.readFileSync('./jquery.js', 'utf-8');

var genericCrawler = function(url, cb) {
  jsdom.env({
    url: url, 
    src: [jquery],
    done: function(err, window) {
      if (err) cb(err, null);
      cb(null, window);
    }
  });
};

module.exports = genericCrawler;
