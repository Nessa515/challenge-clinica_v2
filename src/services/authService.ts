require('express-async-errors');
import { Unauthorized } from "../errors/unauthorized";
import { AuthRepository } from "../repositories/authRepository";
import jwt from 'jsonwebtoken';

class AuthService{
    private authRepository: AuthRepository;

    constructor(){
        this.authRepository = new AuthRepository();
    }

    public async authentication(email:string, password: string){
        if(!email || !password){
            throw new Unauthorized('Please provide email and password!');
        }

        const tutor = this.authRepository.findEmail(email);

        if(!tutor){
            throw new Unauthorized('Invalid credentials!'); 
        }

        const token = jwt.sign({email, password}, process.env.JWT_SECRET ?? '', {expiresIn: '1hr'});

        return token;
    }
}

export{AuthService}