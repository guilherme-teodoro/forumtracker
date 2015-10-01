var Agenda = require('agenda');
var agenda = new Agenda({db: {address: 'localhost:27017/agenda-example'}});

agenda.define('greet the world', function(job, done) {
  console.log(job.attrs.data.time, 'hello world!');
  done();
});

agenda.schedule('in 10 seconds', 'greet the world', {time: new Date()});
agenda.start();

console.log('Wait 10 seconds...');
