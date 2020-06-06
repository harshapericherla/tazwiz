const express = require('express');
const router = express.Router();

const loginCtrl = require('./../controllers/LoginController');

router.post("/login",loginCtrl.loginUser);

module.exports = router;