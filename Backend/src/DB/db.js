const mongoose = require('mongoose')
const dns = require('dns')

dns.setServers(['8.8.8.8', '0.0.0.0'])

async function connectDB () {
    await mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connect to DB")
    })
    .catch((err) => {
        console.log(err.message)
    })
}


module.exports = connectDB;