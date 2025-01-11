import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

const secretKey = process.env.JWT_SECRET;

export const register = (req, res) => {
  const { name, email, password } = req.body;
  const newUser = { name, email, password };
  const user = req.body;

  return res.status(201).sendResponse("User registered", user);
};

const users = [
  { username: "user", password: "123", role: "user" },
  { username: "admin", password: "123", role: "admin" },
];

export const login = (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);

  if (!user) return res.status(400).sendResponse("Invalid user!");

  const token = jwt.sign({ username: user.username, role: user.role }, secretKey, { expiresIn: "24h" });
  return res.sendResponse("Logged in successfully", { ...user, token });
};
