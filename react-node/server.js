const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const db = require("mongoose");
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
require("dotenv").config();


db.connect(process.env.FLIGHT_API_KEY, () => {
  console.log("bd conected");
});

app.use(express.static(process.env.STATIC_API_KEY));

const flightSchema = db.Schema({
  id:String,
  number: String,
  CompName: String,
  peapole: Number,
  date: String,
});

const flightlist = db.model("flightlist", flightSchema);

app.get("/getdata", (req, res) => {
  const getFlights = async () => {
    let flightData = await flightlist.find();
    res.json(flightData);
  };
  getFlights();
});

app.post("/addFlight", (req, res) => {
  let temp = req.body.flightadd;
  const addData = async (t) => {
    await flightlist.insertMany(t);
    res.json({msg:'ok'});
  };
  addData(temp);
});

app.delete("/delFlight", (req, res) => {
   let temp = req.body.flightDel;
  const delData = async (t) => {
    await flightlist.findOneAndDelete(t);
    res.json({msg:'ok'});
  };
   delData(temp);
});

app.listen(3000, () => {
  console.log("server on port 3000");
});