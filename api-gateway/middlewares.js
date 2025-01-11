import { X_GATEWAY_TOKEN } from "../utils/constants.js";

export const patchRequestToken = (req, res, next) => {
  req.headers[X_GATEWAY_TOKEN] = process.env.GATEWAY_TOKEN;
  next();
};
