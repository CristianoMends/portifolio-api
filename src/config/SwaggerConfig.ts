import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class SwaggerConfig {
  static setup(app: INestApplication): void {
    const config = new DocumentBuilder()
      .setTitle('Portifolio API')
      .setDescription('Documentação para a API do portfólio')
      .setVersion('1.0')
      .addBearerAuth()
      .addServer('https://portifolioapi.vercel.app')
      .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('api', app, document, {
      swaggerOptions: {
        persistAuthorization: true, 
      },
      customSiteTitle: 'Portifolio API - Documentação',
    });
  }
}
