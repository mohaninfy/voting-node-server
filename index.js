"use strict"
const express = require('express');
var cors_proxy = require('cors-anywhere');

//const cors = require('cors');
//const mongoose = require('mongoose');
//const mysql = require('mysql');
require('dotenv').config();

const app = express();

// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || '0.0.0.0';
var port = process.env.PORT || 5000;
//app.listen(port , () =>{
//    console.log(`Server running on port : ${port}`);
//});

// app.use(cors());
app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

//mysql://bfe487f9ef0896:11af1766@us-cdbr-east-05.cleardb.net/heroku_1ae353faf98da68?reconnect=true
//const con = mysql.createConnection({
//        host: 'us-cdbr-east-05.cleardb.net',
//        user: process.env.MYSQLUSER || 'bfe487f9ef0896',
//        password: process.env.MYSQLPASS || '11af1766',
//        database: 'heroku_1ae353faf98da68'
//    });

//    con.connect((err) => {
//        if (err) {
//            console.log('Error in connection' + err);
//            return;
//        } else {
//            console.log('Connection established');     
//        }
//    });


const loginRouter = require('./routes/login');
app.use('/login/', loginRouter);
//app.post('/login/', (req, res) => res.send('Working!!!'));

cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, function() {
    console.log('Running CORS Anywhere on :' + port);
});

