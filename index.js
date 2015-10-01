var Agenda = require('agenda');
var mongoose = require('mongoose');

var agenda = new Agenda();
mongoose.connect('mongodb://localhost/test');

agenda.database('mongodb://guilherme:SUcPlWbkuz37@ds027519.mongolab.com:27519/promo-tracker', 'agendaJobs');
agenda.define('greet the world', function(job, done) {});
agenda.every('5 seconds', 'greet the world', {time: new Date()});
agenda.start();

