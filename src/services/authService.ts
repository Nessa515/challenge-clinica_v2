
import { BadRequestError } from "../errors/bad-request";
import { CustomAPIError } from "../errors/custom-Errors";
import { AuthRepository } from "../repositories/authRepository";
import jwt from 'jsonwebtoken';

class AuthService{
    private authRepository: AuthRepository;

    constructor(){
        this.authRepository = new AuthRepository();
    }

    public async authentication(email:string, password: string){
        
        if(!email || !password){
            throw new CustomAPIError('Please provide email and password!', 400);
        }

        const tutor = await this.authRepository.findEmail(email);

        if(!tutor){
            throw new CustomAPIError('No tutor with this email', 400)
        }
        if(password !== tutor.password){
            throw new CustomAPIError('No tutor with this password', 400)
        }

        const token = jwt.sign({email, password}, process.env.JWT_SECRET ?? '', {expiresIn: '1hr'});

        return token;
    }
}

export{AuthService}