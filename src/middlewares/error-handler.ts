import { Request, ErrorRequestHandler, Response, NextFunction } from "express"
import Joi from "joi";
import { ValidationError } from "../errors/custom-validation-error";
import { CustomAPIError } from "../errors/custom-Errors";

function errorHandlerMiddleware(
    err: Error,
    _req: Request,
    res: Response,
    _next: NextFunction,
){
    if(Joi.isError(err) || err instanceof ValidationError){
        return res.status(400).json({
            msg: err.message,
        });
    }
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg: err.message});
    }
    return res.status(500).json({msg: err.message})
}

export{errorHandlerMiddleware}