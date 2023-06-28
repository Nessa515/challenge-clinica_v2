import mongoose, { Schema } from "mongoose";

const petSchema = new mongoose.Schema({
    id: {
        type: Schema.Types.UUID,
        required: false,
    },
    name: {
        type: String,
        required: [true, 'must name provide'],
    },
    species: {
        type: String,
        required: [true, 'must species provide'],
    },
    carry: {
        type: String,
        required: false
    },
    weight:{
        type: Number,
        required: false
    },
    date_of_birth:{
        type: Date,
        required: false
    },
},
);

const Pet = mongoose.model("Pet", petSchema);

export{Pet, petSchema}