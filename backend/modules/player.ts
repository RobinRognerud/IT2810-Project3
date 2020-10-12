import mongoose from "mongoose";

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  flag: {
    type: String,
    required: true,
  },
  overall: {
    type: Number,
    required: true,
  },
  club: {
    type: String,
    required: true,
  },
  clubLogo: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  wage: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Players", PlayerSchema);
