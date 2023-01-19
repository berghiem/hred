const mongoose = require('mongoose');

const config = require('config');
const db = config.get('mongodb_URI');

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true
           // useFindAndModify: false
        });
        console.log("mongo db successfully connected");
    }catch(err){
        console.log(err);
        process.exit(1);
    }
    
};

module.exports = connectDB;
 