import express from "express";
const router = express.Router();
import Country from "../modules/country";

// Increment likes on a country, based on the countryName from the updateLike() function
router.put("/:countryName", async (req, res) => {
  try {
    console.log(req.params.countryName.toLowerCase());
    const updatedCountry = await Country.updateOne(
      { name: req.params.countryName },
      { $inc: { likes: 1 } }
    );
    res.json(updatedCountry);
  } catch (err) {
    res.json({ message: err });
  }
});

//GET BACK ALL THE COUNTRIES
//FIND by either search query or all
//SKIP with a intervall of 9
//LIMIT so it only gives back 9 countries
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
