import { model, models, Schema } from "mongoose";


// Schema For the Particular Product  
const productSchema = new Schema({
    productTitle: { type: String, required: true }, //* Required-ProductTitle
    slug: { type: String, required: true, unique: true }, // * Required-ProductSlug
    productDescription: { type: String, required: true },
    productImgURL: { type: String, required: true },
    productCategory: { type: String, required: true },

    // size: { type: String },
    sizesAndColors: {
        XS: [String],
        SM: [String],
        MD: [String],
        L: [String],
        XL: [String],
        XXL: [String]
    },  // * "Product-Sizes" Are "keys" & Values Are The "Arrays-Of-Available-Colors" Corresponding To The "Available-Size"

    productPrice: { type: Number, required: true },
    productStockQuantity: { type: Number, required: true }

}, { timestamps: true });   // * Automatically Adds The CreatedAt & UpdatedAt Field For All The Documents


const Product = models.Product || model('Product', productSchema); //* agar already model hua wa he? then select the collection, but if not? then create Another-One..!

export default Product;