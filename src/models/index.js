const mongoose = require('mongoose')
const { dbUrl, dbName } = require('../db/dbConfig')

try {
    mongoose.connect(`${dbUrl}/${dbName}`)
    console.log("database connected succesfully");
    
} catch (error) {
    console.log(error);
    
}


module.exports = mongoose
