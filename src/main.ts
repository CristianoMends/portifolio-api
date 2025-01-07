import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigModule } from '@nestjs/config';
<<<<<<< HEAD
import { SwaggerConfig } from './config/SwaggerConfig';
import { AllExceptionsFilter } from './exception/all-exceptions.filter';
=======
>>>>>>> 17628a8bdb8287b3bbd83990ddefd8d4e515cbc0

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
<<<<<<< HEAD

  SwaggerConfig.setup(app);
  app.useGlobalFilters(new AllExceptionsFilter());

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Application is running on port ${port}`);
=======
  await app.listen(3000);
>>>>>>> 17628a8bdb8287b3bbd83990ddefd8d4e515cbc0
}
bootstrap();
