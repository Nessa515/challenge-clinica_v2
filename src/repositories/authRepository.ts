import { Tutor } from "../model/tutors";

class AuthRepository{
    public async findEmail(email:string){
      return Tutor.findOne({email});
    }
}

export{AuthRepository}