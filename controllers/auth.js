const { response } = require("express");

const registerUser = (req, res = response) => {
  res.json({
    ok: true,
    msg: "Create user",
  });
};

module.exports = {
  registerUser,
};
