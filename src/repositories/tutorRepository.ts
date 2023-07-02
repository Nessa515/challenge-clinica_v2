import { BadRequestError } from "../errors/bad-request";
import { CustomAPIError } from "../errors/custom-Errors";
import {Tutor}  from "../model/tutors";


class TutorRepository{

    public async getAll(){
        return Tutor.find({}, '-password')
        //return Tutor.find({});
    }

    public async createTutor(tutorData: any){
        return Tutor.create(tutorData);
    }

    public async updateTutor(id: string, tutorData: any){
        return Tutor.findByIdAndUpdate({_id: id}, tutorData, {
            new: true,
            runValidators: true
        });
    }

    public async deleteTutor(id: string){
        await Tutor.findByIdAndDelete(id);
        // const tutor = Tutor.findById({_id: id});

        // if(!tutor){
        //     return false
        // } else if(!((await tutor).pets.length == 0)){
        //     return false
        // }

        // return Tutor.findOneAndDelete(tutor);
    }
        
    

}
export {TutorRepository};