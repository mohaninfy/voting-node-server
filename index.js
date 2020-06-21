const express = require('express');
const cors = require('cors');
//const mongoose = require('mongoose');
const mysql = require('mysql');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});


const con = mysql.createConnection({
        host: 'localhost',
        user: process.env.MYSQLUSER || 'newuser',
        password: process.env.MYSQLPASS || 'Welcome@123',
        database: 'mydb'
    });

    con.connect((err) => {
        if (err) {
            console.log('Error in connection' + err);
            return;
        } else {
            console.log('Connection established');     
        }
    });


const loginRouter = require('./routes/login');
app.use('/login', loginRouter);

app.listen(port , () =>{
    console.log(`Server running on port : ${port}`);
});
