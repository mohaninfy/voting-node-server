const router = require('express').Router();
let Register = require('../models/register.model');
//const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');

//using mysql
const mysql = require('mysql');

router.route('/').post((req, res) => {
    res.json({message: 'success'});
    //debugger;
    // Register.findOne(
    //     { email: req.body.email }
    // ).then(user => {
    //     debugger;
    //     if (user) {
    //         // need to bcrypt input password cause the db password stored as bcrypted
    //         const roundSalt = 10;
    //         bcrypt.genSalt(roundSalt, (err, salt) => {
    //             if (err) {
    //                 console.log('Gensalt Error: ' + err);
    //             } else {
    //                 bcrypt.hash(req.body.password, salt, (err, hash) => {
    //                     if (err) {
    //                         console.log('Hash Error :' + err);
    //                     } else {
    //                         if (bcrypt.compareSync(user.password, hash)) {
    //                             const signedUser = {
    //                                 _id: user._id,
    //                                 email: user.email,
    //                                 password: user.password
    //                             }
    //                             let token = jwt.sign(signedUser, 'secret', {
    //                                 expiresIn: 120000
    //                             });
    //                             res.send({'AccessToken': token, 'user': user.email});
    //                         }
    //                         else {
    //                             res.json('User does not Exist: ');
    //                         }
    //                     }
    //                 });
    //             }
    //         });
    //     }
    //     else {
    //         res.json('User does not Exist: ');
    //     }
    // }).catch(err => {
    //     console.log('Error :' + err);
    // });

     //mysql login
    //connect mysql
//    const con = mysql.createConnection({
//        host: 'localhost',
//        user: process.env.MYSQLUSER || 'newuser',
//        password: process.env.MYSQLPASS || 'Welcome@123',
//        database: 'mydb'
//    });
//   const con = mysql.createConnection({
//            host: 'sq65ur5a5bj7flas.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//            user: 'fhtfsbs1q1efzc62', // point out to the DB which you are using
//            password: 'xd18plxanqxa9s2r', // provide the password for the same
//            database: 'i5c00w4odaxjc5lk',
//            port: '3306'
//    });    

    //con.connect((err) => {
     // if (err) {
//           console.log('Error in connection' + err);
//            return;
//        } else {
//           console.log('Connection established');     
//            var mail = req.body.email;
//            var pass = req.body.password;
//            debugger;
//            if(mail && pass){
//                var sql = "SELECT * FROM mydb.users_list WHERE email = ? AND password = ?";
//                con.query(sql,[mail, pass], (err, result) => {
//                    if (err) return next(err);
//                    if(result.length > 0){
//                        res.send(result);
//                    }
//                });
 //           } else {                
 //               res.send('please enter valid email & password');
 //           }     
     }
  });
});

module.exports = router;
