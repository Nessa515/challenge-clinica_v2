import { Request, ErrorRequestHandler, Response, NextFunction } from "express"

const errorHandlerMiddleware = (err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
    return res.status(500).json({msg:err})
}

export{errorHandlerMiddleware}