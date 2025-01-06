import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('Authentication')  // Usado para agrupar a documentação no Swagger
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  @ApiOperation({
    summary: 'Login do usuário',
    description: 'Verifica a senha fornecida e, se for válida, gera um token de autenticação.',
  })
  @ApiBody({
    description: 'Senha fornecida pelo usuário para autenticação',
    schema: {
      type: 'object',
      properties: {
        password: { type: 'string', example: 'minhasenha1234' }
      }
    }
  })
  @ApiResponse({
    status: 200,
    description: 'Token gerado com sucesso',
    schema: {
      type: 'object',
      properties: {
        token: { type: 'string', example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' },
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Senha incorreta',
  })
  async login(@Body() body: { password: string }) {
    return this.authService.validatePasswordAndGenerateToken(body.password);
  }
}
