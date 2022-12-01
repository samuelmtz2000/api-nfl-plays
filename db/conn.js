const { MongoClient } = require("mongodb");
const connectionString =
  process.env.ATLAS_URI ||
  "mongodb+srv://samuel:1234@cluster0.wgl4jmd.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err || !db) {
        console.log("Error on db.");
        return callback(err);
      }

      dbConnection = db.db("nfl");
      console.log("Successfully connected to MongoDB.");

      return callback();
    });
  },

  getDb: function () {
    return dbConnection;
  },
};
