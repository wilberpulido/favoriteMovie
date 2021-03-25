const morgan = require('morgan')
const express = require("express");
const cors = requiere('cors');
const app = express();
const dashboadRoutes = require('./middleware/dashboard');
const verifyToken = require('./middleware/validate-token');

//connectting to db
require('./config/Connection');

//importing router
const router = require('./config/routes/routes');

app.use(express.static(__dirname + "/src/public"));

//midlewares
// to view request
app.use(morgan('dev'));
// To read JSON objects that send
app.use(express.json());
//enable corn
app.use(cors());
//verify token
app.use('/api/dashboard', verifyToken, dashboadRoutes);
//use router
app.use("/",router);

module.exports = app;