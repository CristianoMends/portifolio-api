import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { GithubModule } from './modules/github/github.module';
import { AnalyticsModule } from './modules/analytics/analytics.module';
import { AboutModule } from './modules/about/about.module';
import { CertificationModule } from './modules/certification/certification.module';
import { HardSkillModule } from './modules/hard-skill/hard-skill.module';
import { ProjectModule } from './modules/project/project.module';
import { AuthModule } from './modules/auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
dotenv.config();

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/api',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      ssl: { rejectUnauthorized: false }, //remover linha para uso com banco de dados local
      synchronize: true,
      //logging: true,
    }),
    ProjectModule, HardSkillModule, CertificationModule, AboutModule, AnalyticsModule, GithubModule, AuthModule
  ],
  controllers: [AppController],
})
export class AppModule { }
