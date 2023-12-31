import mongoose from "mongoose";
import { petSchema } from "./pets";
import{v4 as uuidv4} from 'uuid';

const tutorSchema = new mongoose.Schema({
    _id:{
        type: String,
        default: uuidv4,

    },
    name:{
        type: String,
        required: [true, 'must name provide'],
    },
    password:{
        type: String,
        required: [false, 'must password provide'],
    },
    phone:{
        type: Number,
        required: [true, 'must phone provide'],
    },
    email:{
        type: String,
        required: [true, 'must email provide'],
        unique: true,
        validate: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/]

    },
    date_of_birth:{
        type: Date,
        required: [true, 'must date_of_birth provide'],
    },
    zip_code:{
        type: Number,
        required: [true, 'must zip_code provide'],
    },
    pets:{
        type:[petSchema],
    },
 },
 );

 const Tutor = mongoose.model("Tutor", tutorSchema);

 export {Tutor, tutorSchema}