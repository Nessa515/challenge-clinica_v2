import mongoose from "mongoose";
import { petSchema } from "./pets";

const tutorSchema = new mongoose.Schema({
    id:{
        type: String,
        required: false,

    },
    name:{
        type: String,
        required: [true, 'must name provide'],
        trim: true,
    },
    phone:{
        type: Number,
        required: [true, 'must phone provide'],
        trim: true,
    },
    email:{
        type: String,
        required: [true, 'must email provide'],
        trim: true,
    },
    date_of_birth:{
        type: Date,
        required: [true, 'must date_of_birth provide'],
        trim: true,
    },
    zip_code:{
        type: Number,
        required: [true, 'must zip_code provide'],
        trim: true,
    },
    pets:{
        type:[petSchema],
    },
 },
 {timestamps: true}
 );

 const Tutor = mongoose.model("Tutor", tutorSchema);

 export{Tutor}