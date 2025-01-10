import { X_GATEWAY_TOKEN } from "../../utils/constants.js";

export const matchRequestToken = (req, res, next) => {
	const reqToken = req.headers[X_GATEWAY_TOKEN];

	if (reqToken !== process.env.GATEWAY_TOKEN) return res.status(401).json({ message: "You can't use API directly!" });

	next();
};
