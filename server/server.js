const dotenv = require('dotenv').config()
const express = require('express');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors');
const connectToDB = require('./config/mongodb');
const userRouter = require('./routes/userRoutes')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')


const PORT = process.env.PORT || 4000

// middleware
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));



app.use(cors({
    origin: "http://localhost:5173",  // Change this to your frontend URL
    credentials: true, // Allows cookies and authentication headers
}));


// connecting to the database
connectToDB()


//routes
app.use('/api/users', userRouter)


// Middleware for handling 404 errors
app.use(notFound);
// Error-handling middleware
app.use(errorHandler);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))