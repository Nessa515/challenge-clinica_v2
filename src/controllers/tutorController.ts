import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import { TutorService } from "../services/tutorService";
import bcrypt from 'bcrypt';
import { Tutor } from "../model/tutors";

const tutorService = new TutorService();

const getAllTutors = (async (req: Request, res: Response) => {
    try {
        const tutors = await tutorService.getAllTutors();
        res.status(StatusCodes.OK).json({tutors});
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: error});
    }

});


const postTutors = (async (req: Request, res: Response) => {
    try {
        const {name, password, email, phone, date_of_birth, zip_code} = req.body
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const tempUser = {name, email, phone, date_of_birth, zip_code, password: hashedPassword}


        const tutor = await tutorService.postTutors({...tempUser});
        res.status(StatusCodes.CREATED).json({tutor});
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: error});
    }
});


const putTutors = (async (req: Request, res: Response) => {
    try {
        const idTutor = req.params.Id;
        const tutorData = req.body;

        const tutor = await tutorService.putTutors(idTutor, tutorData);

        if(!tutor){
            res.status(StatusCodes.BAD_REQUEST).json({msg: `No tutor with ${idTutor}`});
        }
        res.status(StatusCodes.OK).json({name: tutor.name, 
            phone: tutor.phone, 
            email: tutor.email, 
            date_of_birth: tutor.date_of_birth, 
            zip_code: tutor.zip_code
        });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: error});
    }


});


const deleteTutors = (async (req: Request, res: Response) => {
    const idTutor = req.params.Id;
    try {
        const tutor = await Tutor.findById(idTutor);
        if(!tutor){
            res.status(StatusCodes.NOT_FOUND).json({msg: `No tutor with id ${idTutor}`});
        }

        else if(!(tutor.pets.length == 0)){
            res.status(StatusCodes.NOT_FOUND).json({msg: 'Cannot delete a tutor with an associated pet'});
        }else{
        await tutorService.delTutors(idTutor);
        return res.status(StatusCodes.NO_CONTENT).json({});
        }

    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: error});
    }
    

});


export {
    getAllTutors,
    postTutors,
    putTutors,
    deleteTutors,
}