// REQUIRE ALL THE DEPENDENCIES ------------------------------------------------

const express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const mongoose = require("mongoose");

const Room = require("./Schemas/RoomSchema");

// CONNECT TO THE DB -------------------------------------------------------

const dbURI =
  "mongodb+srv://admin:wMrcyuGfQrHUrPL6@cluster0.i5yzc.mongodb.net/skribbble?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "DB connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("DATABASE CONNECTED");
  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log("SERVER RUNNING AT PORT", port);
  });
});

// SETUP THE EXPRESS APP ---------------------------------------------------

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// SERVER ROUTES -----------------------------------------------------------

app.post("/newuser", (req, res) => {
  const userDets = JSON.parse(JSON.stringify(req.body));
  const userID = uuidv4();
  userDets.uid = userID;

  // find any open rooms in the db
  // and if there is an open room then
  // add the player info to the players array of the document
  // but if there is no open room then make a new one.
  if (false) {
    console.log("yo");
  } else {
    // make a new room
    const room = new Room({
      players: [userDets],
      playersLength: 1,
      open: true,
    });

    room.save((err, doc) => {
      if (err) {
        throw err;
      } else {
        // console.log(doc);
        userDets.roomDets = JSON.parse(JSON.stringify(doc));
        console.log(userDets);
        res.json(userDets);
      }
    });
  }
});
