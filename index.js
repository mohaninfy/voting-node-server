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

//mysql://bfe487f9ef0896:11af1766@us-cdbr-east-05.cleardb.net/heroku_1ae353faf98da68?reconnect=true
const con = mysql.createConnection({
        host: 'us-cdbr-east-05.cleardb.net',
        user: process.env.MYSQLUSER || 'bfe487f9ef0896',
        password: process.env.MYSQLPASS || '11af1766',
        database: 'heroku_1ae353faf98da68'
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
