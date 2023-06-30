import { Tutor } from "../model/tutors";
import { TutorRepository } from "../repositories/tutorRepository"


class TutorService{
    private tutorRepository: TutorRepository;

    constructor(){
        this.tutorRepository = new TutorRepository();
    }


    public async getAllTutors(){
        return this.tutorRepository.getAll();
        //return this.tutorRepository.getAll();
    }

    public async postTutors(tutorData: any){
        return this.tutorRepository.createTutor(tutorData);
    }

    public async putTutors(id: string, tutorData: any){
        return this.tutorRepository.updateTutor(id, tutorData);
    }

    public async delTutors(id: string){
        return this.tutorRepository.deleteTutor(id);

    }


}

export{TutorService}
