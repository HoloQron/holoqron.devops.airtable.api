const { URKBase } = require("./airtable");

const helloWorld = () => {
  console.log(
    "----------------------------------------------------------------"
  );
  URKBase("Vue.JS")
    .select({
      view: "Grid view",
    })
    .eachPage(async (records, fetchNextPage) => {
      ("-------------------------------FETCHING RECORDS---------------------------------");
      await records.map((record) => console.log(record.get("Name")));
      fetchNextPage();
    })
    .catch((e) => console.log(e));

  ("-------------------------------DONE ---------------------------------");
};

helloWorld();
