const mongoose = require('mongoose');

const connectionString = "mongodb+srv://wilberOrg:DuLZh7AV9VSvRS61@cluster0.qtznt.mongodb.net/wishList?retryWrites=true&w=majority";

mongoose.connect(connectionString,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
})
    .then(() => {
        console.log("Database connected")
    })
    .catch(err => {
       console.log(err)
    })

module.exports = mongoose;