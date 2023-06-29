import { CustomAPIError } from "./custom-Errors";
import{StatusCodes} from 'http-status-codes';

class Unauthorized extends CustomAPIError{
    public statusCode: number;

    constructor(message: string){
        super(message, 401)
        this.statusCode = StatusCodes.UNAUTHORIZED;
    }
}

export{Unauthorized}