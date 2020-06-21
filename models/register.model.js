const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const registerSchema = new Schema({
        firstname:{type: String },
        lastname:{type: String },
        email: {type: String },
        password: {type: String }
    }, {
        timestamps: true
    });

    const Register = mongoose.model('Register', registerSchema, 'RegisteredUsers');

    module.exports = Register;