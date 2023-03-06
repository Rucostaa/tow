const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please provide email"],
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: 6,
  },
  phone: {
    type: String,
    required: [true, "Please provide phone"],
  },
  address: {
    type: String,
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
  },
  orders: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
    },
    coordinates: {
      type: [Number],
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

driverSchema.index({ location: "2dsphere" });

const Driver = mongoose.model("Driver", driverSchema);

module.exports = Driver;
