import { BadRequestError } from "../errors/bad-request";
import { CustomAPIError } from "../errors/custom-Errors";
import {Tutor}  from "../model/tutors";


class TutorRepository{

    public async getAll(){
        return Tutor.find({}, '-password')
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
    }

}

export {TutorRepository};