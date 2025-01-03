import { HttpException, HttpStatus } from '@nestjs/common';

export class BusinessException extends HttpException {
    constructor(public errorCode: string, message: string) {
        super({ message, errorCode }, HttpStatus.BAD_REQUEST);
    }
}
