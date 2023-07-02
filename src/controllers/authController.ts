import { Request, Response } from "express";
import { AuthService } from "../services/authService";
import { StatusCodes } from "http-status-codes";

const authService = new AuthService();


const auth = (async(req: Request, res: Response) => {

    const {email, password} = req.body;
    
    const token = await authService.authentication(email, password);
    res.status(StatusCodes.OK).json({msg: 'access_token: ', token});

});


export{auth}