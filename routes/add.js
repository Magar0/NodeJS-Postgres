const express = require("express");
const User = require("../models/User");
const Address = require("../models/Address");

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, addressLine, city, state } = req.body;
  const existingUser = await User.findOne({ where: { name } });
  let newUser;
  if (existingUser) {
    console.log({ existingUser });
  } else {
    newUser = await User.create({ name });
  }
  await Address.create({
    addressLine,
    city,
    state,
    UserId: newUser?.id || existingUser.id,
  });
  // console.log({ name, addressLine, city, state });

  res.status(200).json({ message: "Created successfully" });
});

module.exports = router;
