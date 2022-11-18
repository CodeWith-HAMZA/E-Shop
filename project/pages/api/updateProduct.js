
import connectToDB from "../../middleware/db";
import Product from "../../models/Product";

const handler = async (req, res) => {

    if (req.method != "PUT") return res.status(400).send({ error: "bad request" });



    const Body = req.body; 


    try {
        // const _products = await Product.findByIdAndUpdate(ID, { $set: newProduct }, { new: true })
        // console.log("updated")
        // res.status.send(_products)
        // Body[0]

        for (let i = 0; i < Body.length; i++) {
            const product = Body[i];
            console.log(await Product.findByIdAndUpdate(product._id, { $set: product }, { new: true }));
        }

        // await Product.findByIdAndUpdate(Body)
    } catch (error) {
        res.status(500).send({ error, message: "duplicate Values" });
    }




    res.send({ success: true })


}
export default connectToDB(handler);