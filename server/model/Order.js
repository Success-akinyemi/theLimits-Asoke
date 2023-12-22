import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    userId: {
        type: String
    },
    products: [
        {
            productId: {
                type: String
            },
            quantity: {
                type: Number,
                default: 1
            }
        }
    ],
    amount: {
        type: Number,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    lga: {
        type: String,
        required: true
    },
    houseaddress: {
        type: String,
        required: true
    },
    phonenumber: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: 'Pending'
    },
    payment: {
        type: Boolean,
        default: false
    }
},
{timestamps: true}
)

const OrderModel = mongoose.model('thelimitsAsokeOrder', OrderSchema)
export default OrderModel