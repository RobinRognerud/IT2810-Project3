import express from "express";
const router = express.Router();
import Country from "../modules/country";

//GET BACK ALL THE PLAYERS
router.get("/", async (req, res) => {
  try {
    const countries = await Country.find();
    res.json(countries);
  } catch (err) {
    res.json({ message: err });
  }
});

export default router;
