import mongoose from "mongoose";

const CountrieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  capital: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  flag: {
    type: String,
    required: true,
  },
  currencies: {
    type: Array,
    required: true,
  },
  languages: {
    type: Array,
    required: true,
  },
  population: {
    type: Number,
  },
  area: {
    type: Number,
  },
  likes: {
    type: Number,
  },
});

export default mongoose.model("countries", CountrieSchema);
