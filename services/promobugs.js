var fs = require('fs');
var jsdom = require('jsdom');
var jquery = fs.readFileSync('./jquery.js', 'utf-8');
var promobugs = require('./schemas/promobugs');

getDeals: function() {
  jsdom.env({
    url: promobugs.url, 
    src: [jquery],
    done: function(err, window) {
      var $ = window.$;
      var results = [];  
      $(promobugs.listItemQuery).each(function() {
        console.log($(this).find(promobugs.title.query).text());
        console.log($(this).find(promobugs.link.query).attr(promobugs.link.attr));
        console.log($(this).find(promobugs.date.query).attr(promobugs.date.attr));
      });
    }
  });
}
