require('dotenv').config();
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

// POST - posts the order data to the user's order array
// router.post('/order', function(req, res, next) {
//     User.findOne()
// })

module.exports = router;