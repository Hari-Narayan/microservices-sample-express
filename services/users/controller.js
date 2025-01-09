import { User } from "../../models/user.js";

export const getAllUsers = (req, res) => {
  const users = [{ name: "test", email: "test@test.com" }];
  res.json(users);
};

export const createUser = (req, res) => {
  const newUser = req.body;
  console.log(User);
  res.status(201).json({ message: "User created", user: newUser });
};
