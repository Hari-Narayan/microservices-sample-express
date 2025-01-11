export const getAllProducts = (req, res) => {
  const products = [{ name: "product1", price: 10 }];
  return res.sendResponse("Product found successfully", products);
};
