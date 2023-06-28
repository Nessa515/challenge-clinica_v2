import { Tutor } from "../model/tutors";
import { TutorRepository } from "../repositories/tutor-repository"

// class CreateTutorService{
//   private tutorRepository: TutorRepository;

//   constructor(tutorRepository: TutorRepository){
//     this.tutorRepository = tutorRepository;
//   }

//   public async createTutor(tutorData: any){
    

//     if(!tutorData.id || !tutorData.name || !tutorData.email){
//       throw new Error('Missing required fields!');
//     }
    
//     const tutor = await this.tutorRepository.createTutor(tutorData);
//     return tutor;
//   } 
// }

export class TutorService{

    // async post(body: any){
    //     const tutorRepository = new TutorRepository();

    //     const existEmail = await tutorRepository.valEmail(body.email)

    //     if(existEmail == body.email){
    //         throw new Error('Email exist!');
    //     }

    //     const tutor = await this.tutorRepository.create(Tutor);
    //     return tutor;
    // }


}
