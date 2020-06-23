// "use strict"
// const express = require('express');
// var cors_proxy = require('cors-anywhere');
// require('dotenv').config();
// const app = express();

// // Listen on a specific host via the HOST environment variable
// var host = process.env.HOST || '0.0.0.0';
// var port = process.env.PORT || 5000;
// app.use(express.json());
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", '*');
//     res.header("Access-Control-Allow-Credentials", true);
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
//     next();
// });
// const loginRouter = require('./routes/login');
// app.use('/', loginRouter);
// cors_proxy.createServer({
//     originWhitelist: [], // Allow all origins
//     requireHeader: ['origin', 'x-requested-with'],
//     removeHeaders: ['cookie', 'cookie2']
// }).listen(port, function() {
//     console.log('Running CORS Anywhere on :' + port);
// });

const cool = require('cool-ascii-faces');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));
