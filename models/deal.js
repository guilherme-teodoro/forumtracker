var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Promise = require('bluebird');
Promise.promisifyAll(mongoose);

var dealSchema = new Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
  threadId: { type: String, required: true },
  date: { type: Date, required: true }
});

var Deal = mongoose.model('Deal', dealSchema);

module.exports = Deal;
