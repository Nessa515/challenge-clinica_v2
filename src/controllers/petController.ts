import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { PetService } from "../services/petService";

const petService = new PetService();


const postPets = (async (req: Request, res:Response) => {
    try {
        const{id, name, species, carry, weight, date_of_birth} = req.body;
        const idTutor = req.params.tutorId;

        const newPet = await petService.postPet({id, name, species, carry, weight, date_of_birth}, idTutor);
        if(!newPet){
            return res.status(StatusCodes.BAD_REQUEST).json({msg: `No tutor with id ${idTutor}`});
        }

        return res.status(StatusCodes.CREATED).json(newPet);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: error});
    }
    
});


const putPets = (async (req: Request, res: Response) => {
    try {
        const idTutor = req.params.tutorId;
        const idPet = req.params.petId;
        const petData = req.body;

        const newPet = await petService.putPets(idTutor, idPet, petData);
        if(!newPet){
            return res.status(404).json({msg: `No tutor or Pet with given id`});
        }
        return res.status(StatusCodes.OK).json({name: newPet.name,
        species: newPet.species,
        carry: newPet.carry,
        weight: newPet.weight,
        date_of_birth: newPet.date_of_birth
    });
    } catch (error) {
        res.status(500).json({msg: error});
    }
});


const deletePets = (async (req: Request, res: Response) => {
    const idPet = req.params.petId;
    const idTutor = req.params.tutorId;

    try {
        const pet = await petService.delPets(idTutor, idPet);
        if(!pet){
            return res.status(StatusCodes.NOT_FOUND).json({msg: `No pet with ${idPet} or no tutor with ${idTutor}`}); 
        }  
        return res.status(StatusCodes.NO_CONTENT).json();
    } catch (error) {
        res.status(500).json({msg: error});
    }

});

export{
    postPets,
    putPets,
    deletePets,
    
}