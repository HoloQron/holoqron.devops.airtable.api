const { URKBase } = require("./airtable");

const helloWorld = () => {
  console.log(
    "----------------------------------------------------------------"
  );
  URKBase("Vue.JS")
    .select({
      view: "Grid view",
    })
    .eachPage((records, fetchNextPage) => {
      ("-------------------------------FETCHING RECORDS---------------------------------");
      records.map((record) => {
        const line = record.get("Notes");
        let lineArray = line.split("\n");
        const cleanedArray = lineArray.filter((line) => line !== "");
        console.log(cleanedArray);
      });
      fetchNextPage();
      ("-------------------------------DONE ---------------------------------");
    })
    .catch((e) => console.log(e));
};

helloWorld();
