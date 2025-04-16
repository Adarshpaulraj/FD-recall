const mongoose = require('mongoose')
 const env = require('dotenv')
 env.config()
try {
    mongoose.connect(`${process.env.dbUrl}/${process.env.dbName}`)
    console.log("database connected succesfully");
    
} catch (error) {
    console.log(error);
    
}


module.exports = mongoose