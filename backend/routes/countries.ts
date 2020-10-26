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
    const sort: any = {};
    const skipAmount = req.query.skip ? Number(req.query.skip) : 0;
    const name = req.query.name ? req.query.name.toString().toLowerCase() : "";
    const filter: any = {};

    for (const key of Object.keys(req.query)) {
      if (key === 'sort') {
        const value = req.query[key];
        console.log(value);
        if (value != undefined) {
          console.log(value.toString());
          const isDESC = value.toString().endsWith('DESC')
          if (value.toString().startsWith('name')) {
            sort.name = isDESC ? -1 : 1;
          }
          else if (value.toString().startsWith('population')) {
            sort.population = isDESC ? 1 : -1;
          }
          else if (value.toString().startsWith('capital')) {
            sort.capital = isDESC ? -1 : 1;
          }
      }
    }
      filter.name = {
        $regex: name,
        $options: "i",
      };
  
    }



/*     for (const key of Object.keys(req.query)) {
      filter.name = {
        $regex: name,
        $options: "i",
      };
    } */
    console.log(name);
    console.log(filter);
    console.log(skipAmount);
    console.log(sort);

    const countries = await Country.find(filter).sort(sort).skip(skipAmount).limit(9);
    res.json(countries);

  

  } catch (err) {
    res.json({ message: err });
  }
});



export default router;
