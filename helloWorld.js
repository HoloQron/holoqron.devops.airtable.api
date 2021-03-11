import { URKBase } from "./airtable";

const helloWorld = async () => {
  URKBase.base("Web Development")
    .select({
      view: "Main View",
    })
    .eachPage((records) => {
      console.log("Name", records);
    });
};

helloWorld();
