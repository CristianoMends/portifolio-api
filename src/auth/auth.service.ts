import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
dotenv.config(); 

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) { }

    async validatePasswordAndGenerateToken(password: string) {

        if (password !== process.env.PASSWORD) {
            throw new UnauthorizedException('Senha incorreta');
        }

        const payload = { username: 'usuario_autorizado' };
        return {
            token: this.jwtService.sign(payload),
        };
    }
}
