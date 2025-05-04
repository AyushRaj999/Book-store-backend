import mongoose from "mongoose";

const bookschema=mongoose.Schema({
    title:String,
    name:String,
    price:Number,
    category:Number,
    image:String
})
const Book = mongoose.model("Book",bookschema);
export default Book;