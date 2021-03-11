const Airtable = require("airtable");
const initAirtable = new Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.AIRTABLE_API_KEY,
});

const URKBase = initAirtable.base("appjGlK4KwN8XTOKA");
export { URKBase };
