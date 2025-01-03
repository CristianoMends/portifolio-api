import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigModule } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SwaggerConfig } from './config/SwaggerConfig';
import { BusinessExceptionFilter } from './exception/business-exception.filter';
import { AllExceptionsFilter } from './exception/all-exceptions.filter';

ConfigModule.forRoot({
  isGlobal: true,
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true,
    allowedHeaders: 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe, Authorization, Access-Control-Allow-Origin',
    methods: 'GET, POST, PUT, DELETE, HEAD, OPTIONS',
    credentials: true,
  });

  SwaggerConfig.setup(app);
  app.useGlobalFilters(new AllExceptionsFilter());

  await app.listen(3000);
}
bootstrap();
