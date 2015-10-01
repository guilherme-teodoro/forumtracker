var Agenda = require('agenda');
var agenda = new Agenda();

agenda.database('mongodb://guilherme:SUcPlWbkuz37@ds027519.mongolab.com:27519/promo-tracker', 'agendaJobs');

agenda.define('greet the world', function(job, done) {
});

agenda.every('5 seconds', 'greet the world', {time: new Date()});

agenda.start();

console.log('wait 5 segs');
