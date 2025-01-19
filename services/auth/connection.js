import { set, connect } from "mongoose";

set("strictQuery", false);
set("strictPopulate", false);

(() => {
  connect(process.env.DB_URI)
    .then(() => {
      console.info("Database is connected on: ", process.env.DB_URI);
    })
    .catch((err) => console.error(err));
})();
