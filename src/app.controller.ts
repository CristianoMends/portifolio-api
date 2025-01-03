import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Aplicação') 
@Controller()
export class AppController {
  
  @Get()
  @ApiOperation({ summary: 'Retorna uma mensagem de Olá Mundo' })
  @ApiResponse({
    status: 200,
    description: 'Mensagem de sucesso retornada.',
    type: String,
  })
  public getHello() {
    return "Olá mundo!";
  }
}
