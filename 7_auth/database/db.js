const mongoose = require('mongoose');
const connectToDb = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/auth')
        console.log(`database connected`);

    }
    catch (e) {
        console.error(`failed to connect to databse ${e}`)
    }
}
module.exports=connectToDb;