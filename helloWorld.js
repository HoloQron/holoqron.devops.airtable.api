const { URKBase } = require("./airtable");

const helloWorld = async () => {
  URKBase("Web Development")
    .select({
      view: "Main View",
    })
    .eachPage((records) => {
      console.log("Name", records);
    });
};

helloWorld();
