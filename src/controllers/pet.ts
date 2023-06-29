import { Pet, petSchema } from "../model/pets";
import { Tutor } from "../model/tutors";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const postPets = (async (req: Request, res:Response) => {
    try {
        const{id, name, species, carry, weight, date_of_birth} = req.body;

        const idTutor = req.params.tutorId;
        const tutor = await Tutor.findById(idTutor);
        if(!tutor){
            return res.status(404).json({msg: `No tutor with id ${idTutor}`});
        }
        
        const newPet = new Pet({id, name, species, carry, weight, date_of_birth});
        tutor.pets.push(newPet);
        await tutor.save();

        return res.status(StatusCodes.CREATED).json(newPet);
    } catch (error) {
        res.status(500).json({msg: error});
    }
    

    
})

const putPets = (async (req: Request, res: Response) => {
    const idTutor = req.params.tutorId;
    const idPet = req.params.petId;

    const indexTutor = await Tutor.findById(idTutor);
    if(!indexTutor){
        return res.status(404).json({msg: `No tutor with id ${idTutor}`});
    }

    const newPet = await indexTutor.pets.id(idPet)

    if(!newPet){
        return res.status(404).json({msg: `No pet with id ${idPet}`});
    }
    newPet.name = req.body.name;
    newPet.species = req.body.species;
    newPet.carry = req.body.carry;
    newPet.weight = req.body.weight;
    newPet.date_of_birth = req.body.date_of_birth;

    await indexTutor.save();

    return res.status(StatusCodes.OK).json({newPet});
});

const deletePets = (async (req: Request, res: Response) => {
    try {
        const idPet = req.params.petId;
        const idTutor = req.params.tutorId;
        
        const tutor = await Tutor.findById(idTutor);
        if(!tutor){
            return res.status(404).json({msg: `No tutor with ${idTutor}`}); 
        }

        const pet = await tutor.pets.id(idPet);
        if(!pet){
            return res.status(404).json({msg: `No pet with ${idPet}`});;
        }
        tutor.pets.remove(idPet);
        await tutor.save();

        return res.status(StatusCodes.NO_CONTENT).json({});
    } catch (error) {
        res.status(500).json({msg: error});
    }
    


});

export{
    postPets,
    putPets,
    deletePets,
    
}