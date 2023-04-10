const createTokenUser = (user) => {
  return { name: user.name, userId: user._id, role: user.role, token };
};

module.exports = createTokenUser;
