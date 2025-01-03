import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Response } from 'express';
import { BusinessException } from './business-exception';

@Catch(BusinessException)
export class BusinessExceptionFilter implements ExceptionFilter {
    catch(exception: BusinessException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();

        response.status(exception.getStatus()).json({
            statusCode: exception.getStatus(),
            message: exception.message,
            errorCode: exception.errorCode,
            timestamp: new Date().toISOString(),
        });
    }
}
