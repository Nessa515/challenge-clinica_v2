import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
    id:{
        type: String,
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
        required: [true, 'must carry provide'],
    },
    weight:{
        type: Number,
        required: [true, 'must weight provide'],
    },
    date_of_birth:{
        type: Date,
        required: [true, 'must date_of_birth provide']
    },
},
{timestamps: true}
);

const Pet = mongoose.model("Pet", petSchema);

export{Pet, petSchema}