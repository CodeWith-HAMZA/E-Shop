import connectToDB from "../../middleware/db";
import Product from "../../models/Product";

const handler = async (req, res) => {
  const products = await Product.find({});


  if (req.method != "POST")
    return res.status(400).send({ error: "bad request" });

  // let tshirts = {};
  // for (const item of products) {

  //   if (item["productTitle"] in tshirts) {

  //   } else {
  //     tshirts[item["productTitle"]] = JSON.parse(JSON.stringify(item))
  //     // if (item[""])
  //   }

  // }

  return res.send({ success: true, totalResults: products.length, products });
  res.send({ ha: "aarha hun" });
};
export default connectToDB(handler);
