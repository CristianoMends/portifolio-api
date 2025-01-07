import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './project/project.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HardSkillModule } from './hard-skill/hard-skill.module';
import { CertificationModule } from './certification/certification.module';
import { AboutModule } from './about/about.module';
import { AnalyticsModule } from './analytics/analytics.module';
import * as dotenv from 'dotenv';
<<<<<<< HEAD
import { GithubModule } from './github/github.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { AboutModule } from './about/about.module';
import { CertificationModule } from './certification/certification.module';
import { HardSkillModule } from './hard-skill/hard-skill.module';
import { ProjectModule } from './project/project.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
=======
>>>>>>> 17628a8bdb8287b3bbd83990ddefd8d4e515cbc0
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
<<<<<<< HEAD
    ProjectModule, HardSkillModule, CertificationModule, AboutModule, AnalyticsModule, GithubModule
=======
    ProjectModule, HardSkillModule, CertificationModule, AboutModule, AnalyticsModule
>>>>>>> 17628a8bdb8287b3bbd83990ddefd8d4e515cbc0
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
