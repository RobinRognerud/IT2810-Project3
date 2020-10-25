import express from "express";
const router = express.Router();
import Country from "../modules/country";

//GET BACK ALL THE PLAYERS
router.get("/", async (req, res) => {
  try {
    const skipAmount = req.query.skip ? Number(req.query.skip) : 0;
    const name = req.query.name ? req.query.name.toString().toLowerCase() : "";
    const filter: any = {};

    for (const key of Object.keys(req.query)) {
      filter.name = {
        $regex: name,
        $options: "i",
      };
    }
    console.log(name);
    console.log(filter);
    console.log(skipAmount);

    const countries = await Country.find(filter).skip(skipAmount).limit(9);
    res.json(countries);
  } catch (err) {
    res.json({ message: err });
  }
});

export default router;
