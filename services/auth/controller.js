import { config } from "dotenv";
import jwt from "jsonwebtoken";

config();

const secretKey = process.env.JWT_SECRET;

export const register = (req, res) => {
	const { name, email, password } = req.body;
	const newUser = { name, email, password };
	res.status(201).json({ message: "User registered" });
};

const users = [
	{ username: "user", password: "123", role: "user" },
	{ username: "admin", password: "123", role: "admin" },
];

export const login = (req, res) => {
	const { username, password } = req.body;

	const user = users.find(u => u.username === username && u.password === password);

	if (user) {
		const token = jwt.sign({ username: user.username, role: user.role }, secretKey, { expiresIn: "24h" });
		return res.json({ token });
	}
	return res.status(400).send("Invalid user");
};
