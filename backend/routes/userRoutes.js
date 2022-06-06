const express = require("express");
const router = express.Router();
const {
  userRegister,
  userLogin,
  userInfo,
} = require("./../controllers/userController");

router.post("/", userRegister);
router.post("/login", userLogin);
router.get("/me", userInfo);

module.exports = router;
