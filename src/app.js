const path = require("path");
const express = require("express");
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//connectting to db
mongoose.connect('mongodb://localhost/wishList',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
})
    .then(() => console.log("Base de datos conectada"))
    .catch(err => console.log(err))

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