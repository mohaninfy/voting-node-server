const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
// const uri = 'mongodb://mohanrockzz:Bornin%4091@cluster0-shard-00-00-du1sx.mongodb.net:27017,cluster0-shard-00-01-du1sx.mongodb.net:27017,cluster0-shard-00-02-du1sx.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';
const uri =  process.env.ATLAS_URI
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
mongoose.connection.once('open', ()=> {
     console.log('opened');
});

const usersRouter = require('./routes/users');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');

app.use('/register', registerRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);

app.listen(port , () =>{
    console.log(`Server running on port : ${port}`);
});