const Company = require("../models/Company");
const Driver = require("../models/Driver");
const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

const getAllCompanies = async (req, res) => {
  const companies = await Company.find(req.body);
  res.status(StatusCodes.OK).json({ companies });
};
const createCompany = async (req, res) => {
  const company = new Company(req.body);
  await company.save();
  res.status(StatusCodes.CREATED).json({ company });
};
const getSingleCompany = async (req, res) => {
  const { id: companyId } = req.params;
  const company = await Company.findById(companyId);
  res.status(StatusCodes.OK).json({ company });
};
const updateSingleCompany = async (req, res) => {
  const { id: companyId } = req.params;
  const { name, phone, email, adress } = req.body;

  const company = await Company.findById(companyId);
  company.name = name;
  company.phone = phone;
  company.email = email;
  company.adress = adress;

  company.save();
  res.status(StatusCodes.OK).json({ company });
};
const deleteSingleCompany = async (req, res) => {
  const { _id: companyId } = req.params;
  const company = await Company.findById(companyId);
  await company.remove();
  res.status(StatusCodes.OK).json({ msg: "Successo! Empresa removida" });
};
const getAllDrivers = async (req, res) => {
  const { id: companyId } = req.params;
  console.log(req.params);
  const company = await Company.findById(companyId).populate("drivers");
  if (!company) {
    throw new CustomError.NotFoundError(
      `Company with id ${companyId} not found`
    );
  }
  const drivers = company.drivers || [];
  console.log(drivers);
  res.status(StatusCodes.OK).json(drivers);
};

const getSingleDriver = async (req, res) => {
  const { id, driverId } = req.params;
  console.log(req.params);
  const company = await Company.findById(id);
  if (!company) {
    return res.status(404).json({ msg: "Company not found" });
  }
  const driver = await Driver.findById(driverId);
  console.log(driver);

  res.status(200).json(driver);
};

const createDriver = async (req, res) => {
  const { id: companyID } = req.params;
  const company = await Company.findOne({ id: companyID });

  const driver = req.body;

  // Check if the username already exists
  const existingDriver = await Driver.findOne({ name: driver.name });
  if (existingDriver) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Name already taken" });
  }

  // Create and save the new driver
  const newDriver = new Driver(driver);
  await newDriver.save();

  company.drivers.push(newDriver);
  await company.save();

  res.status(StatusCodes.OK).json(newDriver);
};
const updateSingleDriver = async (req, res) => {
  const { id, driverId } = req.params;
  console.log(req.params);
  const driver = await Driver.findById(driverId);
  const { name, phone, email } = req.body;
  driver.name = name;
  driver.phone = phone;
  driver.email = email;
  await driver.save();
  res.status(StatusCodes.OK).json(driver);
};
const deleteSingleDriver = async (req, res) => {
  const { id, driverId } = req.params;
  console.log(req.params);
  const driver = await Driver.findById(driverId);
  await driver.remove();
  res.status(StatusCodes.OK).json("driver deleted");
};

module.exports = {
  getAllCompanies,
  createCompany,
  getSingleCompany,
  updateSingleCompany,
  deleteSingleCompany,
  getAllDrivers,
  createDriver,
  getSingleDriver,
  updateSingleDriver,
  deleteSingleDriver,
};
