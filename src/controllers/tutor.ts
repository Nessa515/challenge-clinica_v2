import { Pet} from "../model/pets";
import { Tutor} from "../model/tutors";
import { Request, Response } from "express";

const getAllTutors = (async (req: Request, res: Response) => {
    try {
        const tutors = await Tutor.find({});
        res.status(200).json({tutors});
    } catch (error) {
        res.status(500).json({msg: error});
    }
});


    

const postTutors = (async (req: Request, res: Response) => {
    try {
        const { id, name, phone, email, date_of_birth, zip_code, pets } = req.body;
        const tutor = await Tutor.create(req.body)
        return res.status(201).json({tutor});
    } catch (error) {
        res.status(500).json({msg: error});
    }
})



const putTutors = (async (req: Request, res: Response) => {
    try {
        const idTutor = req.params.Id;

        const tutor = await Tutor.findOneAndUpdate({_id:idTutor}, req.body, {
            new: true,
            runValidators: true,
        })
        if(!tutor){
            return res.status(404).json({msg: `No tutor with ${idTutor}`});
        }

        res.status(200).json({tutor})

    } catch (error) {
        res.status(500).json({msg: error});
    }
    


})

const deleteTutors = (async (req: Request, res: Response) => {
    try {
        const idTutor = req.params.Id;

        const pet = await Pet.find({tutor: idTutor});
        if(pet){
            return res.status(400).json({msg: `Tutor with id ${idTutor} cannot be deleted with associated pet`});
        }

        const delTutor = await Tutor.findByIdAndDelete(idTutor);
        if(!delTutor){
            return res.status(404).json({msg: `No tutor with ${idTutor}`});
        }
        return res.status(200).json({msg: 'status code 204'});
    } catch (error) {
        res.status(500).json({msg: error});
    }
})


export default {
    getAllTutors,
    postTutors,
    putTutors,
    deleteTutors,
}