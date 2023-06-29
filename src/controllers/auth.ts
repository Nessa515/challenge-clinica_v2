import { Tutor } from "../model/tutors";
import { Pet } from "../model/pets";
import { Request, Response } from "express";
import jwt  from "jsonwebtoken";
import { BadRequestError } from "../errors/bad-request";


const auth = (async(req: Request, res: Response) => {
    const {email, password} = req.body
    const tutor = await Tutor.findOne({email})

    if(!email || !password){
        throw new BadRequestError('Please provide email and password');
    }

    if(!tutor){
        throw new BadRequestError('Invalid credentials');
    }

    // const isPasswordCorrect = await Tutor.findOne(password);

    // if(!isPasswordCorrect){
    //     throw new Error('Invalid credentials');
    // }

    const token = jwt.sign({email, password}, process.env.JWT_SECRET ?? '',{expiresIn:'1hr'})

    res.status(200).json({msg: 'access_token:', token})
})


export{auth}