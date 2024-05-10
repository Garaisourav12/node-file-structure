// module imports
const express = require("express");

// File imports
const studentRouter = require("./routes/studentRouter");
const instructorRouter = require("./routes/instructorRouter");


// Constants
const app = express();


// Middleware
app.use(express.json());



// Routes endpoint & controller function ka mapping
app.use('/student', studentRouter);
app.use('/instructor', instructorRouter);


// db connection
require('./db')

// Server start
app.listen(3000, () => {
    console.log(`Server running at http://localhost:3000`);
})