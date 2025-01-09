import jwt from "jsonwebtoken";

const secretKey = "yourSecretKey";

export const auth = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

export const authToken = (req, res, next) => {
  console.log(req.headers.authorization);
  const header = req?.headers.authorization;
  const token = header && header.split(" ")[1];

  if (token == null) return res.status(401).json("Please send token");

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.status(403).json("Invalid token", err);
    req.user = user;
    next();
  });
};

export const authRole = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) return res.status(403).json("Unauthorized");

    next();
  };
};
