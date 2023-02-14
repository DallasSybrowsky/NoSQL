const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

// After creating the Heroku application, visit https://dashboard.heroku.com/apps/ select the application name and add your Atlas connection string as a Config Var

const connectionString =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/usersDB";

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
