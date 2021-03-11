const Airtable = require("airtable");
require("dotenv").config();

const initAirtable = new Airtable({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.AIRTABLE_API_KEY,
}).base("appjGlK4KwN8XTOKA");

exports.URKBase = initAirtable;
