// import { set, connect } from "mongoose";

// set("strictQuery", false);
// set("strictPopulate", false);

// (() => {
//   connect(process.env.DB_URI)
//     .then(() => {
//       console.info("Database is connected on: ", process.env.DB_URI);
//     })
//     .catch((err) => console.error(err));
// })();

// db.js
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      // Check if not already connected
      await mongoose.connect(process.env.DB_URI);
      console.log("New connection established");
    } else {
      console.log("Connection already exists. Reusing existing connection.");
    }
    console.info("Database is connected on: ", process.env.DB_URI);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;

// // service1.js
// import connectDB from './db.js';

// await connectDB();
// // ... use models

// // service2.js
// import connectDB from './db.js';

// await connectDB();
// // ... use models

// // index.js (main app file)
// import connectDB from './db.js';
// import './service1.js';
// import './service2.js';

// await connectDB(); // This would be the first one to execute

// // ... rest of express app
