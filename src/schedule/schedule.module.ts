import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleService } from './schedule.service';
import { ScheduleController } from './schedule.controller';
import { ScheduleRoom } from './schedule.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([ScheduleRoom]),
  ],
  providers: [ScheduleService],
  controllers: [ScheduleController],
})
export class ScheduleModule {}
