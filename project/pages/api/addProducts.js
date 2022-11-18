import connectToDB from "../../middleware/db";
import Product from "../../models/Product";

const handler = async (req, res) => {
  if (req.method != "POST")
    return res.status(400).send({ error: "bad request" });

  const Products = req.body;
  console.log(Products)
  try {
    for (const item of Products) {
      const {
        productTitle,
        slug,
        productDescription,
        productImgURL,
        productCategory,
        sizesAndColors, // * Another Object Of Sizes-(Keys) & Values-(Array Of Colors)
        color,
        productPrice,
        productStockQuantity,
      } = item;

      const product = new Product({
        productTitle,
        slug,
        productDescription,
        productImgURL,
        productCategory,
        sizesAndColors,
        color,
        productPrice,
        productStockQuantity,
      });
      await product.save(); // * Saving Into DB
    }
    return res.send({ success: true });
  } catch (error) {
    return res.status(500).send({ error, message: "duplicate Values" });
  }

};
export default connectToDB(handler);
