import express from "express";
const router = express.Router();
import Country from "../modules/country";

//GET BACK ALL THE PLAYERS
router.get("/", async (req, res) => {
  try {
    const skipAmount = req.query.skip ? Number(req.query.skip) : 0;
    const countries = await Country.find().skip(skipAmount);
    res.json(countries);
  } catch (err) {
    res.json({ message: err });
  }
});

export default router;
