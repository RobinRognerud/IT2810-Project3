import express from "express";
const router = express.Router();
import Country from "../modules/country";

//GET BACK ALL THE PLAYERS
router.get("/", async (req, res) => {
  try {
    const name = req.query.name ? req.query.name.toString().toLowerCase() : "";
    const filter: any = {};

    for (const key of Object.keys(req.query)) {
      filter.name = {
        $regex: name,
        $options: "i",
      };
    }

    const countries = await Country.find(filter);
    res.json(countries);
  } catch (err) {
    res.json({ message: err });
  }
});

export default router;
