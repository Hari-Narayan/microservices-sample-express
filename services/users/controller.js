export const getAllUsers = (req, res) => {
  const users = [{ name: "test", email: "test@test.com" }];
  return res.sendResponse("User found successfully", users);
};

export const createUser = (req, res) => {
  const newUser = req.body;
  return res.status(201).sendResponse("User created", newUser);
};
