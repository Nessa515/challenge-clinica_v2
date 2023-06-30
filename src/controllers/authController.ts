import { Request, Response } from "express";
import { AuthService } from "../services/authService";
import { StatusCodes } from "http-status-codes";
require('express-async-errors');

const authService = new AuthService();


const auth = (async(req: Request, res: Response) => {

    const {email, password} = req.body;


    const token = await authService.authentication(email, password);
    res.status(StatusCodes.OK).json({msg: 'access_token: ', token});

    // const {email, password} = req.body
    // const tutor = await Tutor.findOne({email})

    // if(!email || !password){
    //     throw new BadRequestError('Please provide email and password');
    // }

    // if(!tutor){
    //     throw new BadRequestError('Invalid credentials');
    // }

    // const token = jwt.sign({email, password}, process.env.JWT_SECRET ?? '',{expiresIn:'1hr'})

    // res.status(200).json({msg: 'access_token:', token})
});


export{auth}