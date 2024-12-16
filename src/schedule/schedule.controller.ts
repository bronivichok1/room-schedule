import { Controller, Post, Body } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleRoom1, ScheduleRoom2, ScheduleRoom3, ScheduleRoom4, ScheduleRoom5, ScheduleRoom6, ScheduleRoom7 } from './schedule.entity';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Post('room1')
  createRoom1Event(@Body() data: Partial<ScheduleRoom1>) {
    return this.scheduleService.createRoom1Event(data);
  }

  @Post('room2')
  createRoom2Event(@Body() data: Partial<ScheduleRoom2>) {
    return this.scheduleService.createRoom2Event(data);
  }

  @Post('room3')
  createRoom3Event(@Body() data: Partial<ScheduleRoom3>) {
    return this.scheduleService.createRoom3Event(data);
  }

  @Post('room4')
  createRoom4Event(@Body() data: Partial<ScheduleRoom4>) {
    return this.scheduleService.createRoom4Event(data);
  }

  @Post('room5')
  createRoom5Event(@Body() data: Partial<ScheduleRoom5>) {
    return this.scheduleService.createRoom5Event(data);
  }

  @Post('room6')
  createRoom6Event(@Body() data: Partial<ScheduleRoom6>) {
    return this.scheduleService.createRoom6Event(data);
  }
  
  @Post('room7')
  createRoom7Event(@Body() data: Partial<ScheduleRoom7>) {
    return this.scheduleService.createRoom7Event(data);
  }
}
