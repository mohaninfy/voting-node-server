var mysql = require('mysql2/promise');
const mysqlConfig = {
    host: 'sq65ur5a5bj7flas.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'fhtfsbs1q1efzc62', // point out to the DB which you are using
    password: 'xd18plxanqxa9s2r', // provide the password for the same
    database: 'i5c00w4odaxjc5lk',
    port: '3306'
}

module.exports = {
    createConnection: ()=> {
        return mysql.createConnection(mysqlConfig);
    }
}
