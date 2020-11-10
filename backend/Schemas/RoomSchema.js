const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  players: Array,
  playersLength: Number,
  open: Boolean,
});

const Room = mongoose.model("Room", roomSchema);
module.exports = Room;
