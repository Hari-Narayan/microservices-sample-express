import jwt from "jsonwebtoken";
const secretKey = "yourSecretKey";

export const register = (req, res) => {
  const { name, email, password } = req.body;
  const newUser = { name, email, password };
  res.status(201).json({ message: "User registered" });
};

// export const login = (req, res) => {
//   const { email, password } = req.body;
//   const user = { id: 1, email: email };

//   if (user && user.email === email && password === "test") {
//     const token = jwt.sign(user, secretKey, { expiresIn: "1h" });
//     res.json({ token });
//   } else {
//     res.status(401).json({ message: "Invalid credentials" });
//   }
// };

const users = [
  { username: "user", password: "123", role: "user" },
  { username: "admin", password: "123", role: "admin" },
];

export const login = (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    const token = jwt.sign({ username: user.username, role: user.role }, secretKey, { expiresIn: "24h" });
    return res.json({ token });
  }
  return res.status(400).send("Invalid user");
};
