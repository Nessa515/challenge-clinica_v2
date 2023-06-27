import { Pet } from "../model/pets";
import { Tutor } from "../model/tutors";
import { Request, Response } from "express";

const getAllTutors = (async (req: Request, res: Response) => {
    try {
        const tutors = await Tutor.find({})
        res.status(200).json({tutors})
    } catch (error) {
        res.status(500).json({msg: error})
    }
});


const postTutors = (async (req: Request, res: Response) => {
    const {id, name, phone, email, date_of_birth, zip_code, pets} = req.body

    const tutors = await Tutor.create(req.body)
    res.status(201).json(tutors)
})


const postPets = (async (req: Request, res:Response) => {
    try {
        const{id, name, species, carry, weight, date_of_birth} = req.body

        const idTutor = req.params.Id
        const index = Tutor.findById(idTutor)
        //const pets = await Tutor[].Pet.create(req.body)
    } catch (error) {
        
    }
    

    
})

export default {
    getAllTutors,
    postTutors,
}