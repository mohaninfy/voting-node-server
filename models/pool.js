var mysql = require('mysql2/promise');
mysql://b0ce3d4f8a73b8:184d2439@us-cdbr-east-05.cleardb.net/heroku_610a5e0c423687d?reconnect=true
const mysqlConfig = {
    host: 'us-cdbr-east-05.cleardb.net',
    user: 'b0ce3d4f8a73b8', // point out to the DB which you are using
    password: '184d2439', // provide the password for the same
    database: 'heroku_610a5e0c423687d',
    port: '3306'
}

module.exports = {
    createConnection: ()=> {
        return mysql.createConnection(mysqlConfig);
    }
}
