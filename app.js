// External imports
const express = require('express');
const dotenv = require('dotenv');
const { sendMail } = require('./utils/mailer');

// Env variable link
dotenv.config({path : './Config/config.env'});

// Calling mail fonction
sendMail('logodark5@gmail.com');

// Variable 
const app = express();

// Body parser
app.use(express.json());

// Listener
app.listen(process.env.PORT, () => {
    console.log(`Server using port : ${process.env.PORT}`)
});