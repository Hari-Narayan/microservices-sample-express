import mongoose from "mongoose";

const connectUserDB = async () => {
	if (!process.env.USER_DB_URI) {
		console.log("URI not found. So, database connection not established!");

		return;
	}

	try {
		if (mongoose.connection.readyState === 0) {
			await mongoose.connect(process.env.USER_DB_URI);
			console.log("New connection established");
			console.info("Database is connected on: ", process.env.USER_DB_URI);
		} else {
			console.log("Connection already exists. Reusing existing connection.");
		}
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
};

export default connectUserDB;
