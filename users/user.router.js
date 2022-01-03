const { createUser,getUsers, getDealer, login } = require("./user.controller");
const router = require("express").Router();
const { checkToken } = require("./auth/token_validation");
const { getFarmers } = require("./user.service");


router.post("/",checkToken,createUser);
router.get("/",checkToken,getUsers);
router.post("/login",login);
router.get("/api",checkToken, getDealer);

module.exports = router;
