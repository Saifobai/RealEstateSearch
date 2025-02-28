const mongoose = require('mongoose')

const connectToDB = async () => {

    try {
        mongoose.connection.on('connected', () => {
            console.log('Connected to Database')
        })
        await mongoose.connect(`${process.env.MONGODB_URI}/RealEstate`)

    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message)
        process.exit(1)
    }
}

module.exports = connectToDB