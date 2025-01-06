import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class SwaggerConfig {


  static setup(app: INestApplication): void {
    const config = new DocumentBuilder()
      .setTitle('Portifolio API')
      .setDescription('Documentação para a api do portifolio')
      .setVersion('1.0')
      .addBearerAuth()
      .addServer('https://portifolioapi.vercel.app')
      .build();

    const CSS_URL = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.18.2/swagger-ui.css";
    const SWAGGER_BUDLE = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.18.2/swagger-ui-bundle.js";

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('api', app, document, {
      swaggerOptions: {
        persistAuthorization: true,
      },
      customCssUrl: CSS_URL,
      customJs: SWAGGER_BUDLE,
      customSiteTitle: 'Portifolio API - Documentação',
    });
  }
}
