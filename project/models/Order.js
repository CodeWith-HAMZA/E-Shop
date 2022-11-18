import { model, models, Schema } from "mongoose";

const orderSchema = new Schema({
    userID: { type: String, required: true, unique: true },
    userProducts: [{
        productID: { type: String },
        productQuantity: { type: Number, default: 1 },
    }],
    orderAddress: { type: String, required: true },
    orderAmount: { type: Number, required: true },
    orderStatus: { type: String, required: true, default: "Pending" },
}, { timestamps: true });


const Order = models.Order || model('Order', orderSchema); // agar already model hua wa he? then select the collection, but if not? then create one..!


export default Order;