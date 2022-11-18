import { connect } from "mongoose";
import Product from "../../models/Product";


export default async function handler(req, res) {

  return res.send({ Greetings: "Assalam-Wo-Alaikum" });

}
