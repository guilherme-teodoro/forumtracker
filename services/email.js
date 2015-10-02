var nodemailer = require('nodemailer');
var Promise = require('bluebird');

var emailService = {
  send: function(data) {
    var transporter = nodemailer.createTransport();
    var mailOptions = {
      from: 'promobug@promo-tracker.com',
      to: 'gmacedo1000@gmail.com',
      subject: data.title,
      html: '<b>' + data.title + '</b>' + '<p> ' + data.link + '</p>' 
    };

    return new Promise(function(resolve, reject) {
      transporter.sendMail(mailOptions, function(err, info){
        if (err) reject(err);
        resolve(info);
      });
    });
  }
};

module.exports = emailService;
