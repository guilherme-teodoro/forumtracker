var Agenda = require('agenda');
var mongoose = require('mongoose');
var promobugsJob = require('./jobs/promobugs');

mongoose.connect('mongodb://guilherme:SUcPlWbkuz37@ds027519.mongolab.com:27519/promo-tracker');

var agenda = new Agenda();
agenda.database('mongodb://guilherme:SUcPlWbkuz37@ds027519.mongolab.com:27519/promo-tracker', 'agendaJobs');
agenda.define('promobugs', promobugsJob);
agenda.every('2 seconds', 'promobugs');
agenda.start();

agenda.on('start', function(job) {
  console.log("Job %s starting", job.attrs.name);
});

agenda.on('complete', function(job) {
  console.log("Job %s finished", job.attrs.name);
});

agenda.on('success:promobugs', function(job) {
  console.log("Sent Email Successfully to: %s", job.attrs.data.to);
});

agenda.on('fail:promobugs', function(err, job) {
  console.log("Job failed with error: %s", err.message);
});

console.log('start!!!');

