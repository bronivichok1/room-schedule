import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from './schedule/schedule.module';
import { AppController } from './app.controller'; 
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // ваш хост
      port: 5432,        // порт PostgreSQL
      username: 'your_username',
      password: 'your_password',
      database: 'your_database',
      autoLoadEntities: true, // автоматически загружать все сущности
      synchronize: true,       // автоматически синхронизировать структуру базы данных
    }),
    ScheduleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
