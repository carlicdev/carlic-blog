const mongoose = require('mongoose');

const URI = process.env.MONGO_URI;

mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false})
.then(db => console.log('connected to DB'))
.catch(err => console.log(err));

module.exports = mongoose;