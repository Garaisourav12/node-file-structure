const express = require('express')

const studentRouter = express.Router();


// import controllers
const { getUser } = require('../controllers/userControllers');


studentRouter.get('/login', getUser);
studentRouter.get('/register', getUser);


module.exports = studentRouter