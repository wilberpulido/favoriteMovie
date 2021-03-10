const path = require("path");
const express = require("express");
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();

//cors
app.use(cors);

//connectting to db
require('./models/Connection');

//importing router
const indexRouter = require('./routes/index');

//settings
app.set('port', process.env.PORT || 3000);
const PORT = app.get('port');
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(express.static(__dirname + "/src/public"));

//midlewares
// to view request
app.use(morgan('dev'));
// to read body for request
app.use(express.urlencoded({extended: false}));
// To read JSON objects that send
app.use(bodyParser.json());

//routers
app.use('/',indexRouter);

app.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}`);
});