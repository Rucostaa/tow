const express = require("express");
const router = express.Router();
const {
  authenticateUser,
  authorizePermissions,
} = require("../middleware/authentication");
const {
  getAllOrders,
  getSingleOrder,
  getCurrentUserOrders,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");

router
  .route("/")
  .get(authenticateUser, getAllOrders)
  .post(authenticateUser, createOrder);

router.route("/getAllOrders").get(getCurrentUserOrders);

router.route("/:id").get(getSingleOrder).patch(updateOrder).delete(deleteOrder);

module.exports = router;
