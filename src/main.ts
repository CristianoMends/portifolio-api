import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigModule } from '@nestjs/config';

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
  await app.listen(3000);
}
bootstrap();
