
import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import bookRoute from './route/bookRoute.js'
import userRoute from './route/userRoutes.js'
import cors from "cors"
const app = express()

app.use(cors())
app.use(express.json());


dotenv.config();
const PORT=4001;

// Connect to mongodb
const mongoDBURL="mongodb://localhost:27017/bookstore";
try {
  mongoose.connect(mongoDBURL,{
    // useNewUrlParser: true,
    // useUnifiedTopology: true
  });
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Error...!! on Connection with MongoDB");
}

//Defining Routes
app.use("/book",bookRoute)
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})