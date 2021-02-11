const fs = require('fs');
const cors = require('cors');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

/* .env file configuration */
require('dotenv').config({
path: `${__dirname}/.env`
});

/* Async Error Handler */
require('express-async-errors');
console.log("jkbkjf");
//
const port = process.env.PORT || 3000;
const app = express();

// DB configuration
const connectDB = require('./config/db');
connectDB();

/* start middle ware */
app.use(express.static(path.join(__dirname, 'public')));
//app.use('/public/mailTemplate', express.static('./public/mailTemplate'));

/* Body parser to manage reqest content */
app.use(bodyParser.json({
limit: '50mb'
}));
app.use(bodyParser.urlencoded({
limit: '50mb',
extended: true,
parameterLimit: 50000
}));

/* Add cors CROS (cross plotform enable) */
app.use(cors());

/* Setting the Header's for request */
app.use((req, res, next) => {
res.setHeader('Access-Control-Allow-Origin', '*');

res.setHeader('Access-Control-Allow-Headers',
'Origin,X-Requested-Width,Content-Type,Accept');

res.setHeader('Access-Control-Allow-Methods',
'GET,POST,PATCH,DELETE,OPTIONS');
next();
});

/* Importing Routes */
//const authRoutes = require('./routes/auth');

/* Routing configuring */
//app.use('/api/auth', authRoutes);


console.log("working");


/* Port config */
app.listen(port, () => {
console.log('server started', port);
});

module.exports = app


