const express = require("express");
const router = express.Router();
const {
  authenticateUser,
  authorizePermissions,
} = require("../middleware/authentication");
const {
  getAllCompanies,
  createCompany,
  getSingleCompany,
  updateSingleCompany,
  deleteSingleCompany,
  getAllDrivers,
  updateSingleDriver,
  createDriver,
  deleteSingleDriver,
  getSingleDriver,
} = require("../controllers/companyController");

router.route("/").get(getAllCompanies).post(createCompany);
router
  .route("/:id")
  .get(getSingleCompany)
  .patch(updateSingleCompany)
  .delete(deleteSingleCompany);
router.route("/:id/driver").get(getAllDrivers).post(createDriver);
router
  .route("/:id/driver/:driverId")
  .get(getSingleDriver)
  .patch(updateSingleDriver)
  .delete(deleteSingleDriver);

module.exports = router;
