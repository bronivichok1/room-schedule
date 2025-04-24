import { Controller, Post, Body, Get, Delete, Param, UseGuards, Req } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { SessionAuthGuard, AuthenticatedRequest } from '../auth/session.auth.guard';

@UseGuards(SessionAuthGuard)
@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Get('room/:number')
  async getRoomEvents(@Param('number') number: string, @Req() req: AuthenticatedRequest) {
    const userName = req.session.name;
    const userTitle = req.session.title;

    return this.scheduleService.getRoomEvents(number);
  }

  @Post('room')
  createRoomEvent(@Body() data: CreateScheduleDto, @Req() req: AuthenticatedRequest) {
    const userName = req.session.name;
    const userTitle = req.session.title;

    return this.scheduleService.createRoomEvent(data);
  }

  @Get('status')
  async getStatusEvents(@Req() req: AuthenticatedRequest) {
    const userName = req.session.name;
    const userTitle = req.session.title;

    return this.scheduleService.getStatusEvents();
  }

  @Delete('room/:id')
  async deleteRoomEvent(@Param('id') id: string, @Req() req: AuthenticatedRequest) {
    const userName = req.session.name;
    const userTitle = req.session.title;

    return this.scheduleService.deleteRoomEvent(id);
  }
}
