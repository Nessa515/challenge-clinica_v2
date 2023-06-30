import {Tutor}  from "../model/tutors"



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
        return Tutor.findByIdAndDelete({_id: id});
    }
        
    

}
export {TutorRepository};