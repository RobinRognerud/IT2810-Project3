import express from "express";
const app = express();
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

//Import routes
import countriesRoute from "./routes/countries";

//Middelware
app.use(bodyParser.json());
app.use(cors());

//Lager et API som kan brukes for å hente ut informasjon
app.use("/countries", countriesRoute);

//ROUTES
app.get("/", (req, res) => {
  res.send("We are on home");
});

//Listen to the server
app.listen(4000, () => console.log("Server running on port 4000!"));

//Connect to DB
mongoose.connect(
  "mongodb://Countries:Countries@it2810-51.idi.ntnu.no:27017/Countries",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
