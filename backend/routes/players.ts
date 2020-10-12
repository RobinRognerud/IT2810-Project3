import express from "express";
const router = express.Router();
import Player from "../modules/player";

//GET BACK ALL THE PLAYERS
router.get("/", async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (err) {
    res.json({ message: err });
  }
});

export default router;
