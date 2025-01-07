import { HttpException, HttpStatus } from '@nestjs/common';

export class BusinessException extends HttpException {
  constructor(public errorCode: string, message: string, statusCode: HttpStatus = HttpStatus.BAD_REQUEST) {
    super({ message, errorCode }, statusCode);
  }
}
