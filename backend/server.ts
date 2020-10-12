import express from "express";
const app = express();
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

//Import routes
import playersRoute from "./routes/players";

//Middelware
app.use(bodyParser.json());
app.use(cors());

//Lager et API som kan brukes for å hente ut informasjon
app.use("/players", playersRoute);

//ROUTES
app.get("/", (req, res) => {
  res.send("We are on home");
});

//Listen to the server
app.listen(3000, () => console.log("Server running on port 3000!"));

//Connect to DB
mongoose.connect("mongodb://it2810-51.idi.ntnu.no:27017/athletes", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
