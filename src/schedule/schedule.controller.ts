import { Controller, Post, Body,Get, Delete,Param } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleRoom} from './schedule.entity';
import { CreateScheduleDto } from './dto/create-schedule.dto';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Get('room/:number') 
  async getRoomEvents(@Param('number') number: string) { 
    return this.scheduleService.getRoomEvents(number); 
  }

  @Post('room')
  createRoomEvent(@Body() data: CreateScheduleDto) {
    return this.scheduleService.createRoomEvent(data);
  }
  
  @Delete('room/:id')
  async deleteRoomEvent(@Param('id') id: string) {
    return this.scheduleService.deleteRoomEvent(id);
  }

}
