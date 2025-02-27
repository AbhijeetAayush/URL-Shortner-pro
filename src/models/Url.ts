import mongoose from "mongoose";
import ShortUniqueId = require("short-unique-id")

const uid = new ShortUniqueId({ length: 8 });

const urlSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  shortUrl: {
    type: String,
    default: () => uid.randomUUID(),
    unique: true,
  },
});

const Url = mongoose.model("Url", urlSchema);

export default Url;
