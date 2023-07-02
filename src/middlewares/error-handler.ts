import { Request, Response, NextFunction } from "express"
import Joi, {ValidationError} from "joi";
import { CustomAPIError } from "../errors/custom-Errors";
import { BadRequestError } from "../errors/bad-request";

function errorHandlerMiddleware(
    err: Error,
    _req: Request,
    res: Response,
    _next: NextFunction
){  
    if (Joi.isError(err) || err instanceof ValidationError) {
        return res.status(400).json({msg: err.message });
    }
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg: err.message});
    }
    console.log(err);
    return res.status(500).json({msg: err.message})
}

export{errorHandlerMiddleware}