import { CustomAPIError } from "./custom-Errors";
import{StatusCodes} from 'http-status-codes';

class BadRequestError extends CustomAPIError{
    public statusCode: number

    constructor(message: string){
        super(message, 400);
        this.statusCode = 400;
    }
}

export{BadRequestError}

