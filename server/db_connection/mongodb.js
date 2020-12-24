const mongoose = require("mongoose");
const url = 'mongodb+srv://votingSystem:dlyagnSVNsw9ZBaI@cluster0.5ecxs.mongodb.net/voting_system?retryWrites=true&w=majority';
 
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

mongoose.Promise = global.Promise;