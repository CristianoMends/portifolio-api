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
dotenv.config();



@Module({
  imports: [
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
    ProjectModule, HardSkillModule, CertificationModule, AboutModule, AnalyticsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
