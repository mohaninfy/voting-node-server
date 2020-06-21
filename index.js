const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const loginRouter = require('./routes/login');
app.use('/login', loginRouter);

app.listen(port , () =>{
    console.log(`Server running on port : ${port}`);
});