import express from "express";
const router = express.Router();
import Country from "../modules/country";

// Increment likes on a country, based on the countryName from the updateLike() function
router.put("/:countryName", async (req, res) => {
  try {
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
//FIND by either search query, region or get back all if none is specified
//SORT by the given parameter
//SKIP with a intervall of 9
//LIMIT so only 9 countries are displayed at once
router.get("/", async (req, res) => {
  try {
    const skipAmount = req.query.skip ? Number(req.query.skip) : 0;
    const name = req.query.name
      ? "^" + req.query.name.toString().toLowerCase()
      : "";
    const filterString = req.query.filter
      ? req.query.filter.toString().toLowerCase()
      : "";

    const filter: any = {};
    const sort: any = {};

    for (const key of Object.keys(req.query)) {
      if (key === "sort") {
        const value = req.query[key];
        if (value != undefined) {
          const isDESC = value.toString().endsWith("DESC");
          if (value.toString().startsWith("name")) {
            sort.name = isDESC ? -1 : 1;
          } else if (value.toString().startsWith("population")) {
            sort.population = isDESC ? 1 : -1;
          } else if (value.toString().startsWith("capital")) {
            sort.capital = isDESC ? -1 : 1;
          }
        }
      }

      filter.$and = [
        { region: { $regex: filterString, $options: "i" } },
        {
          name: { $regex: name, $options: "i" },
        },
      ];
    }

    const countries = await Country.find(filter)
      .sort(sort)
      .skip(skipAmount)
      .limit(9);
    res.json(countries);
  } catch (err) {
    res.json({ message: err });
  }
});

export default router;
