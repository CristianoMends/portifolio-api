import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class SwaggerConfig {
  static setup(app: INestApplication): void {
    const config = new DocumentBuilder()
      .setTitle('Portifolio API')
      .setDescription('Documentação para a api do portifolio')
      .setVersion('1.0')
      .addTag('portifolio')
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('/api', app, document, {
      customCss: '/api/swagger-ui.css',
      customJs: '/api/swagger-ui-bundle.js',
      swaggerOptions: {
        persistAuthorization: true,
      },
      customSiteTitle: 'Portifolio API - Documentação',
    });
  }
}
