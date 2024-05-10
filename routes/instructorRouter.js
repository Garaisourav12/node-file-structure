const express = require('express')

const instructorRouter = express.Router()

// import controllers
const { getUser } = require('../controllers/userControllers');


instructorRouter.get('/instructor/login', getUser);
instructorRouter.get('/instructor/register', getUser);


module.exports = instructorRouter