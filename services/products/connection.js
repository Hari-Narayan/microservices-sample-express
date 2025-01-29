import mongoose from "mongoose";

const connectProductDB = async () => {
	if (!process.env.PRODUCT_DB_URI) {
		console.log("URI not found. So, database connection not established!");

		return;
	}

	try {
		if (mongoose.connection.readyState === 0) {
			await mongoose.connect(process.env.PRODUCT_DB_URI);
			console.log("New connection established");
			console.info("Database is connected on: ", process.env.PRODUCT_DB_URI);
		} else {
			console.log("Connection already exists. Reusing existing connection.");
		}
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
};

export default connectProductDB;
