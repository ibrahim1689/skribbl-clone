const express = require("express");
var bodyParser = require("body-parser");

var cors = require("cors");

const app = express();

app.use(cors());

const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://admin:wMrcyuGfQrHUrPL6@cluster0.i5yzc.mongodb.net/skribbble?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  if (err) throw err;

  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log("SERVER RUNNING AT PORT ", port);
    console.log("DATABASE CONNECTED");
  });

  const collection = client.db("skribbble").collection("rooms");

  // perform actions on the collection object

  client.close();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post("/newuser", (req, res) => {
  console.log(req.body);
});
