const mongoose = require("mongoose");
const url = 'mongodb://localhost:27017/votingSystem';
 
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

mongoose.Promise = global.Promise;