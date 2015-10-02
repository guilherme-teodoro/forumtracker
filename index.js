var Agenda = require('agenda');
var express = require('express');
var mongoose = require('mongoose');
var promobugsJob = require('./jobs/promobugs');

mongoose.connect('mongodb://guilherme:SUcPlWbkuz37@ds027519.mongolab.com:27519/promo-tracker');

var agenda = new Agenda();
agenda.database('mongodb://guilherme:SUcPlWbkuz37@ds027519.mongolab.com:27519/promo-tracker', 'agendaJobs');
agenda.define('promobugs', promobugsJob);
agenda.every('2 minutes', 'promobugs');
agenda.start();

console.log('start!!!');


var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
