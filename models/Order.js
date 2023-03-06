const mongoose = require("mongoose");
/*
const SingleOrderItemSchema = mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  amount: { type: Number, required: true },
  product: {
    type: mongoose.Schema.ObjectId,
    ref: 'Product',
    required: true,
  },
});
*/
const OrderSchema = mongoose.Schema(
  {
    tax: {
      type: Number,
      required: true,
    },
    subtotal: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: [
        "pending",
        "failed",
        "paid",
        "accepted",
        "reached",
        "completed",
        "canceled",
      ],
      default: "pending",
    },
    kind: {
      type: String,
      enum: [
        "roadassistance",
        "repaironspot",
        "longdistance",
        "international",
        "lux",
      ],
      required: true,
    },
    carBrand: {
      type: String,
    },
    carModel: {
      type: String,
    },
    licensePlate: {
      type: String,
    },

    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    clientSecret: {
      type: String,
      required: true,
    },
    paymentIntentId: {
      type: String,
    },
    driver: {
      type: mongoose.Schema.ObjectId,
      ref: "Driver",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
