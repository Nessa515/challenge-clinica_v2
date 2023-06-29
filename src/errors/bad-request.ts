import { CustomAPIError } from "./custom-Errors";
import{StatusCodes} from 'http-status-codes';

class BadRequestError extends CustomAPIError{
    constructor(message: string){
        super(message, 404);
        this.statusCode = StatusCodes.BAD_REQUEST;
    }
}

export{BadRequestError}