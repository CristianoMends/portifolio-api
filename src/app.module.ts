import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './project/project.module';
import { config } from './ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HardSkillModule } from './hard-skill/hard-skill.module';
import { CertificationModule } from './certification/certification.module';
import { AboutModule } from './about/about.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';


@Module({
  imports: [  
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/'
    }),  
    ProjectModule,TypeOrmModule.forRoot(config), HardSkillModule, CertificationModule, AboutModule, AnalyticsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
