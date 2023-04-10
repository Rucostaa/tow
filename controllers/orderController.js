const Order = require("../models/Order");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const { checkPermissions } = require("../utils");

const fakeStripeAPI = async ({ amount, currency }) => {
  const client_secret = "someRandomValue";
  return { client_secret, amount };
};

const createOrder = async (req, res) => {
  console.log(req.user);
  const { tax, kind, carBrand, carModel, licensePlate } = req.body;

  if (!tax) {
    throw new CustomError.BadRequestError("Please provide tax");
  }

  let subtotal = 0;

  // calculate total
  const total = tax + subtotal;

  // get client secret
  const paymentIntent = await fakeStripeAPI({
    amount: total,
    currency: "usd",
  });

  const order = await Order.create({
    total,
    subtotal,
    tax,
    kind,
    carBrand,
    carModel,
    licensePlate,
    clientSecret: paymentIntent.client_secret,
    user: req.user.userId,
  });

  res
    .status(StatusCodes.CREATED)
    .json({ order, clientSecret: order.clientSecret });
};
const getAllOrders = async (req, res) => {
  const orders = await Order.find({});
  res.status(StatusCodes.OK).json({ orders, count: orders.length });
};
const getSingleOrder = async (req, res) => {
  const { id: orderId } = req.params;
  const order = await Order.findOne({ _id: orderId });
  if (!order) {
    throw new CustomError.NotFoundError(`No order with id : ${orderId}`);
  }

  if (req.user) {
    checkPermissions(req.user, order.user);
  }

  res.status(StatusCodes.OK).json({ order });
};

const getCurrentUserOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user.userId });
  res.status(StatusCodes.OK).json({ orders, count: orders.length });
};
const updateOrder = async (req, res) => {
  const orderId = req.params.id.trim();
  const { paymentIntentId } = req.body;

  const order = await Order.findOne({ _id: orderId });
  if (!order) {
    throw new CustomError.NotFoundError(
      `Esse pedido não está na nossa base de dados: 1- ${orderId}`
    );
  }
  checkPermissions(req.user, order.user);

  order.paymentIntentId = paymentIntentId;
  order.status = "paid";
  await order.save();

  res.status(StatusCodes.OK).json({ order });
};
const deleteOrder = async (req, res) => {
  const orderId = req.params.id.trim();
  const order = await Order.findById({ _id: orderId });
  await order.remove();
  res.status(StatusCodes.OK).json({ msg: "Order Deleted Successfully" });
};
module.exports = {
  getAllOrders,
  getSingleOrder,
  getCurrentUserOrders,
  createOrder,
  updateOrder,
  deleteOrder,
};
