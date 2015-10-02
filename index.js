var Agenda = require('agenda');
var mongoose = require('mongoose');
var promobugsJob = require('./jobs/promobugs');

mongoose.connect('mongodb://guilherme:SUcPlWbkuz37@ds027519.mongolab.com:27519/promo-tracker');

var agenda = new Agenda();
agenda.database('mongodb://guilherme:SUcPlWbkuz37@ds027519.mongolab.com:27519/promo-tracker', 'agendaJobs');
agenda.define('promobugs', promobugsJob);
agenda.every('2 minutes', 'promobugs');
agenda.start();

console.log('start!!!');

