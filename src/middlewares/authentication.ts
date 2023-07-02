import jwt, { verify } from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express';
import { Unauthorized } from '../errors/unauthorized';


type JwtPayload = {
    email: string;
}


const authentication = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];

    if(!authHeader || !authHeader.startsWith('Bearer')){
        throw new Unauthorized('Authentication invalid')
    }

    const token = authHeader.split(' ')[1];

    
    const {email} = jwt.verify(token, process.env.JWT_SECRET ?? '') as JwtPayload
       
    if(!email){
        throw new Unauthorized('Authentication invalid')
    }
    next();

};

export{authentication}