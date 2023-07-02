import { Pet } from "../model/pets";
import { Tutor } from "../model/tutors";


class PetRepository{
    
    public async createPet(petData: any, tutorId: string){
        const tutor = await Tutor.findById(tutorId);
        if(!tutor){
            return null;
        }

        const newPet = new Pet(petData);
        tutor.pets.push(newPet);
        await tutor.save();

        return newPet;
    }

    public async updatePet(tutorId: string, petId: string, petData: any){
        const tutor = await Tutor.findById(tutorId);
        if(!tutor){
            return false
        }

        const pet = tutor.pets.id(petId);
        if(!pet){
            return false
        }

        pet.set(petData)
        await tutor.save();

        return pet;
    }


    public async deletePet(tutorId: string, petId: string){
        const tutor = await Tutor.findById(tutorId);
        if(!tutor){
            return false
        }

        const pet = tutor.pets.id(petId);
        if(!pet){
            return false
        }

        tutor.pets.remove(petId)
        await tutor.save();
        return tutor;
    }
}

export{PetRepository}