import { X_GATEWAY_TOKEN } from "../utils/constants.js";

export const patchRequestToken = (req, res, next) => {
	req.headers[X_GATEWAY_TOKEN] = process.env.GATEWAY_TOKEN;
	next();
};

export const errorHandler = (err, req, res) => {
	console.error(err);

	let statusCode = res.statusCode ? res.statusCode : 500;

	res.status(statusCode).json({
		message: err.message,
		statusCode,
	});
};
