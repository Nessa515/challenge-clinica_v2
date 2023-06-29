import { StatusCodes } from "http-status-codes";
import { Pet} from "../model/pets";
import { Tutor} from "../model/tutors";
import { Request, Response } from "express";

const getAllTutors = (async (req: Request, res: Response) => {
    try {
        const tutors = await Tutor.find({});
        res.status(StatusCodes.OK).json({tutors});
    } catch (error) {
        res.status(500).json({msg: error});
    }
});

const postTutors = (async (req: Request, res: Response) => {
    try {
        const { id, name, password, phone, email, date_of_birth, zip_code, pets } = req.body;
        const tutor = await Tutor.create(req.body)
        return res.status(StatusCodes.CREATED).json({tutor});
    } catch (error) {
        res.status(500).json({msg: error});
    }
});


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

        res.status(StatusCodes.OK).json({tutor})

    } catch (error) {
        res.status(500).json({msg: error});
    }
    


});

const deleteTutors = (async (req: Request, res: Response) => {
    try {
        const idTutor = req.params.Id;

        const pet = await Pet.find({tutor: idTutor});
        if(pet.length > 0){
            return res.status(400).json({msg: `Tutor with id ${idTutor} cannot be deleted with associated pet`});
        }

        const delTutor = await Tutor.findByIdAndDelete(idTutor);
        if(!delTutor){
            return res.status(404).json({msg: `Failed to delete to tutor with ${idTutor}`});
        }
        return res.status(StatusCodes.NO_CONTENT).json({});
    } catch (error) {
        res.status(500).json({msg: error});
    }
});


export {
    getAllTutors,
    postTutors,
    putTutors,
    deleteTutors,
}