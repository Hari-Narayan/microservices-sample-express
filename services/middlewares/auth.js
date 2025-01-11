import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

const secretKey = process.env.JWT_SECRET;

export const auth = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.status(401).sendResponse("Token not found!");

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.status(401).sendResponse("You are not authorized");

    req.user = user;
    next();
  });
};

export const authRole = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) return res.status(403).sendResponse("You didn't have access!");

    next();
  };
};
