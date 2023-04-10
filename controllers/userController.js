const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

const { checkPermissions } = require("../utils");
const getAllUsers = async (req, res) => {
  console.log(req.user);
  const users = await User.find({ role: "user" }).select("-password");
  res.status(StatusCodes.OK).json({ users });
};

const getSingleUser = async (req, res) => {
  const user = await User.findOne({ _id: req.params.id.trim() }).select(
    "-password"
  );
  if (!user) {
    throw new CustomError.NotFoundError(`No user with id : ${req.params.id}`);
  }
  checkPermissions(req.user, user._id);
  res.status(StatusCodes.OK).json({ user });
};

const showCurrentUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ user: req.user });
};
// update user with user.save()
const updateUser = async (req, res) => {
  console.log(req.user);
  const { email, name } = req.body;
  if (!email || !name) {
    throw new CustomError.BadRequestError("Please provide all values");
  }

  const user = await User.findOne({ _id: req.user.userId });
  checkPermissions(req.user, user._id);

  user.email = email;
  user.name = name;

  await user.save();

  const token = user.createJWT();
  res.status(StatusCodes.OK).json({
    user: { email: user.email, name: user.name, role: user.role },
    token,
  });
};
const deleteUser = async (req, res) => {
  const userId = req.params.id.trim();
  const user = await User.findById({ _id: userId });
  await user.remove();
  res.status(StatusCodes.OK).json({ msg: "user deleted" });
};
const updateUserPassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  if (!oldPassword || !newPassword) {
    throw new CustomError.BadRequestError("Please provide both values");
  }
  const user = await User.findOne({ _id: req.user.userId });

  const isPasswordCorrect = await user.comparePassword(oldPassword);
  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError("Invalid Credentials");
  }
  user.password = newPassword;

  await user.save();
  res.status(StatusCodes.OK).json({ msg: "Success! Password Updated." });
};

module.exports = {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
  deleteUser,
};

/* 
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the Earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}
const Driver = require("../models/driver");

const getNearestDrivers = async (latitude, longitude) => {
  const drivers = await Driver.find();
  const nearestDrivers = [];

  drivers.forEach((driver) => {
    const driverLatitude = driver.location.coordinates[0];
    const driverLongitude = driver.location.coordinates[1];

    const distance = calculateDistance(
      latitude,
      longitude,
      driverLatitude,
      driverLongitude
    );

    if (distance <= 10) {
      // consider only drivers within a 10 km radius
      nearestDrivers.push({ driver, distance });
    }
  });
  console.log(nearestDrivers);
  return nearestDrivers[0] || null;
};
*/

// update user with findOneAndUpdate
// const updateUser = async (req, res) => {
//   const { email, name } = req.body;
//   if (!email || !name) {
//     throw new CustomError.BadRequestError('Please provide all values');
//   }
//   const user = await User.findOneAndUpdate(
//     { _id: req.user.userId },
//     { email, name },
//     { new: true, runValidators: true }
//   );
//   const tokenUser = createTokenUser(user);
//   attachCookiesToResponse({ res, user: tokenUser });
//   res.status(StatusCodes.OK).json({ user: tokenUser });
// };
