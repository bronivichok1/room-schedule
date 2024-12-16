import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleService } from './schedule.service';
import { ScheduleController } from './schedule.controller';
import { ScheduleRoom1 } from './schedule.entity';
import { ScheduleRoom2 } from './schedule.entity';
import { ScheduleRoom3 } from './schedule.entity';
import { ScheduleRoom4 } from './schedule.entity';
import { ScheduleRoom5 } from './schedule.entity';
import { ScheduleRoom6 } from './schedule.entity';
import { ScheduleRoom7 } from './schedule.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([ScheduleRoom1, ScheduleRoom2, ScheduleRoom3, ScheduleRoom4, ScheduleRoom5, ScheduleRoom6, ScheduleRoom7]),
  ],
  providers: [ScheduleService],
  controllers: [ScheduleController],
})
export class ScheduleModule {}
