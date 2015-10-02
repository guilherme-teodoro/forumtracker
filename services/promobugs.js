var promobugs = require('../schemas/promobugs');
var Promise = require('bluebird');
var genericCrawler = require('./genericCrawler');

var promobugsService = {
  getDeals: function() {
    return new Promise(function(resolve, reject) {
      genericCrawler(promobugs.url, function(err, window) {
        if (err) reject(err);

        var $ = window.$;
        var results = [];  

        $(promobugs.listItemQuery).each(function() {
          if($(this).find(promobugs.title.query).text().toLowerCase().match(/xbox/g)) {
            results.push({
              title: $(this).find(promobugs.title.query).text(),
              link: window.document.location.origin + $(this).find(promobugs.link.query).attr(promobugs.link.attr),
              threadId: $(this).attr('id'),
              date: new Date($(this).find(promobugs.date.query).attr(promobugs.date.attr))
            });
          }
        });

        resolve(results);
      });
    });
  }
};

module.exports = promobugsService;
