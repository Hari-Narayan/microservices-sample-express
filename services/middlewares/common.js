import { X_GATEWAY_TOKEN } from "../../utils/constants.js";

export const matchRequestToken = (req, res, next) => {
  const reqToken = req.headers[X_GATEWAY_TOKEN];

  if (reqToken !== process.env.GATEWAY_TOKEN) return res.status(400).sendResponse("You can't use API directly!");

  next();
};

export const responseHandler = (req, res, next) => {
  res.sendResponse = (message = "Success", body, statusCode = res.statusCode || 200, errors = null) => {
    res.status(statusCode).json({ body, message, statusCode, errors: errors || [message] });
  };

  next();
};

export const errorHandler = (err, req, res) => {
  console.error("EEEEEEEEEEEEEEEEEEEEEEEEEEEEEE", { err });

  let errorList = [];
  let statusCode = res.statusCode ? res.statusCode : 500;
  let message = err.message || "Something went wrong on the server.";

  if (err.name === "ValidationError") {
    statusCode = 400;
    errorList = Object.values(err.errors).map((val) => val.message);
    message = "Validation Error";
  } else if (err.name === "CastError" && err.kind === "ObjectId") {
    statusCode = 404;
    message = "Resource not found";
  } else if (err.message === "Not Found") {
    statusCode = 404;
  } else if (err.statusCode) {
    statusCode = err.statusCode;
  }

  if (statusCode === 500 && process.env.NODE_ENV === "production") message = "Something went wrong on the server.";

  res.status(statusCode).json({
    message,
    statusCode,
    body: null,
    errors: errorList || message ? [message] : [] || [],
  });
};
