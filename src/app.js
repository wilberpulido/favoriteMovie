const path = require("path");
const morgan = require('morgan')
const bodyParser = require('body-parser');
const express = require("express");
const app = express();

//connectting to db
require('./models/Connection');

//importing router
const router = require('./config/routes/routes');

//settings
app.set('port', process.env.PORT || 5000);
const PORT = app.get('port');

app.use(express.static(__dirname + "/src/public"));

//midlewares
// to view request
app.use(morgan('dev'));
// to read body for request
app.use(express.urlencoded({extended: false}));
// To read JSON objects that send
app.use(bodyParser.json());
//use router

app.use("/",router);


app.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}`);
});