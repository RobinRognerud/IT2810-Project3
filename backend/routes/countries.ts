import express from "express";
const router = express.Router();
import Country from "../modules/country";

//GET BACK ALL THE PLAYERS
router.get("/", async (req, res) => {
  try {
    const sort: any = {};

    for (const key of Object.keys(req.query)) {
      if (key === 'sort') {
        const value = req.query[key];
        if (value != undefined) {
          console.log(value.toString());
          const isDESC = value.toString().endsWith('DESC')
          if (value.toString().startsWith('name')) {
            sort.name = isDESC ? -1 : 1;
          }
          else if (value.toString().startsWith('population')) {
            sort.population = isDESC ? -1 : 1;
          }
          else if (value.toString().startsWith('capital')) {
            sort.capital = isDESC ? -1 : 1;
          }
      }
    }

    const countries = await Country.find().sort(sort);
    res.json(countries);

  }

  } catch (err) {
    res.json({ message: err });
  }
});



export default router;
