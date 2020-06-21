const router = require('express').Router();
let Register = require('../models/register.model');
const bcrypt = require('bcrypt');


//using mysql
const mysql = require('mysql');

router.route('/add').post((req, res) => {
    debugger;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    const newUser = new Register({
        firstname,
        lastname,
        email,
        password,
    });
    const roundSalt = 10;
    bcrypt.genSalt(roundSalt, function (err, salt) {
        if (err) {
            console.log('Gensalt Error: ' + err);
        } else {
            bcrypt.hash(req.body.password, salt, (err, hash) => {
                if (err) {
                    console.log('Hash Error :' + err);
                } else {
                    newUser.password = hash;
                }
            });
        }
    });
    debugger;
        //newUser.save()
        // .then(() =>
        //     res.json('User added!')
        // ).catch(err => res.status(400).json('Error: ' + err));


    //mysql register
    //connect mysql
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
            var checkTable = "SELECT 1 FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'mydb' AND TABLE_NAME = 'registeredusers' LIMIT 1";
            // var checkTable = "SELECT EXISTS(SELECT * FROM information_schema.tables WHERE table_schema = 'mydb' AND table_name = 'registeredusers');";
            // var checkTable = "SHOW TABLES FROM `mydb` LIKE 'registeredusers'"; //zero rows = not exist
            con.query(checkTable, (err, result) => {
                console.log(err);
                console.log(JSON.stringify(result));                
                if (!result.length) {
                    //table doesn't exist
                    console.log( err);
                    console.log(JSON.stringify(result)); 
                    console.log('table does not exist');
                    var createTable = "CREATE TABLE registeredusers (firstname VARCHAR(255), lastname VARCHAR(255), email VARCHAR(255), password VARCHAR(255))";
                    con.query(createTable, (err, result) => {
                        if (err) {
                            console.log('error:' + err);
                            console.log('Table already exist: '+ err);
                            var sql = "INSERT INTO mydb.registeredusers (firstname, lastname, email, password) VALUES ('"+newUser.firstname+"','"+newUser.lastname+"','"+newUser.email+"','"+newUser.password+"');";
                            con.query(sql, function (err, result) {
                                if (err) {
                                    console.log('Error: ' + err);
                                } else {
                                    console.log("1 record inserted");
                                    res.json('1 record inserted!');
                                    con.end();
                                }
                            });
                        } else {
                            console.log(JSON.stringify(result));
                            var sql = "INSERT INTO mydb.registeredusers (firstname, lastname, email, password) VALUES ('"+newUser.firstname+"','"+newUser.lastname+"','"+newUser.email+"','"+newUser.password+"');";
                            con.query(sql, function (err, result) {
                                if (err) {
                                    console.log('Error: ' + err);
                                } else {
                                    console.log("1 record inserted");
                                    res.json('1 record inserted!');
                                    con.end();
                                }
                            });
                        }
                    });
                } else {
                    // table exist
                    console.log('Table Exist: ');
                    console.log(JSON.stringify(result));                    
                    var sql = "INSERT INTO mydb.registeredusers (firstname, lastname, email, password) VALUES ('"+newUser.firstname+"','"+newUser.lastname+"','"+newUser.email+"','"+newUser.password+"');";
                    con.query(sql, function (err, result) {
                        if (err) {
                            console.log('Error: ' + err);
                        } else {                            
                            console.log(JSON.stringify(result));
                            console.log("1 record inserted");
                            res.json('1 record inserted!');
                            con.end();
                        }
                    });
                }
            });
        }
    });
});

router.route('/update/:id').post((req, res) => {
    debugger;
    Register.findById(req.params.id)
        .then(users => {
            users.firstname = req.body.firstname;
            users.lastname = req.body.lastname;
            users.email = req.body.email;
            users.password = req.body.password;
            users.save()
                .then(() => res.json('User updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        }).catch(err => res.status(400).json('Error : ' + err));
});
module.exports = router;