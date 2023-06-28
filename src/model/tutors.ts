import mongoose, { Schema } from "mongoose";
import { petSchema } from "./pets";

const tutorSchema = new mongoose.Schema({
    id:{
        type: Schema.Types.UUID,
        required: false,

    },
    name:{
        type: String,
        required: [true, 'must name provide'],
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

 export{Tutor}