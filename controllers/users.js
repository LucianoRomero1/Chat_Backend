const { response } = require("express");
const User = require("../models/user");

const getUsers = async (req, res = response) => {

    const from = Number(req.query.from) || 0;

    //$ne not existing , es para buscar todos menos al que esta logueado
    const users = await User
    .find({_id: {$ne: req.uid}})
    .sort('-online')
    .skip(from)
    .limit(20)


  return res.json({
    ok: true,
    users,
  });
};

module.exports = {
  getUsers,
};
