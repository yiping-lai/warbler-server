const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise=Promise;
mongoose.connect(process.env.DATABASEURL||'mongodb://localhost:27017/warbler', { useNewUrlParser: true }); 

module.exports.User=require('./user');
module.exports.Message=require('./message');