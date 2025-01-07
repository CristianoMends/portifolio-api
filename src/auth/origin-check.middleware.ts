import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class IpDomainOrTokenGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    const origin = request.headers['origin'] || request.connection.remoteAddress;

    const authorizationHeader = request.headers['authorization'];

    const allowedIp = process.env.ALLOWED_IP;
    const allowedDomain = process.env.ALLOWED_DOMAIN;
    const allowedToken = process.env.ALLOWED_TOKEN;

    const isIpDomainValid = origin === allowedIp || origin === allowedDomain;

    const isTokenValid = authorizationHeader && authorizationHeader.startsWith('Bearer ')
      ? authorizationHeader.split(' ')[1] === allowedToken
      : false;

    if (isIpDomainValid || isTokenValid) {
      return true;
    }

    throw new UnauthorizedException('Unauthorized access: Invalid IP/Domain or Token');
  }
}
