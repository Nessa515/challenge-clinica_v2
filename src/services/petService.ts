import { PetRepository } from "../repositories/petRepository";

class PetService{
    private petRepository: PetRepository;

    constructor(){
        this.petRepository = new PetRepository();
    }

    
    public async postPet(petData: any, tutorId: string){
        return this.petRepository.createPet(petData, tutorId);
    }

    public async putPets(tutorId: string, petId: string, petData: any){
        return this.petRepository.updatePet(tutorId, petId, petData);
    }

    public async delPets(petId: string, tutorId: string){
        return this.petRepository.deletePet(petId, tutorId);
    }
}

export{PetService}