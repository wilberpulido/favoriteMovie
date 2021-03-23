const mongoose = require('mongoose');
require('dotenv').config()

const uri = `mongodb+srv://${process.env.USERMONGO}:${process.env.PASSWORD}@cluster0.qtznt.mongodb.net/wishList?retryWrites=true&w=majority`;
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