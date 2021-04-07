const mongoose = require('mongoose');
// require('dotenv').config()

const uri = 'mongodb://localhost/wishList';
const opcionals = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
}
async function connect(){ 
  return await mongoose.connect(uri,opcionals)
}
connect()
.then(() => {
  console.log("Database connected")
})
.catch(err => {
  console.log(err)
})
module.exports = mongoose;