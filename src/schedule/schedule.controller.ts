import { Controller, Post, Body,Get, Delete,Param } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleRoom1, ScheduleRoom2, ScheduleRoom3, ScheduleRoom4, ScheduleRoom5, ScheduleRoom6, ScheduleRoom7 } from './schedule.entity';
import { CreateScheduleDto } from './dto/create-schedule.dto';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Get('room1') 
  async getRoom1Events() {
    return this.scheduleService.getRoom1Events(); 
  }
  @Get('room2') 
  async getRoom2Events() {
    return this.scheduleService.getRoom2Events(); 
  }
  @Get('room3') 
  async getRoom3Events() {
    return this.scheduleService.getRoom3Events(); 
  }
  @Get('room4') 
  async getRoom4Events() {
    return this.scheduleService.getRoom4Events(); 
  }
  @Get('room5') 
  async getRoom5Events() {
    return this.scheduleService.getRoom5Events(); 
  }
  @Get('room6') 
  async getRoom6Events() {
    return this.scheduleService.getRoom6Events(); 
  }
  @Get('room7') 
  async getRoom7Events() {
    return this.scheduleService.getRoom7Events(); 
  }
  @Post('room1')
  createRoom1Event(@Body() data: CreateScheduleDto) {
    return this.scheduleService.createRoom1Event(data);
  }

  @Post('room2')
  createRoom2Event(@Body() data: CreateScheduleDto) {
    return this.scheduleService.createRoom2Event(data);
  }

  @Post('room3')
  createRoom3Event(@Body() data: CreateScheduleDto) {
    return this.scheduleService.createRoom3Event(data);
  }

  @Post('room4')
  createRoom4Event(@Body() data: CreateScheduleDto) {
    return this.scheduleService.createRoom4Event(data);
  }

  @Post('room5')
  createRoom5Event(@Body() data: CreateScheduleDto) {
    return this.scheduleService.createRoom5Event(data);
  }

  @Post('room6')
  createRoom6Event(@Body() data: CreateScheduleDto) {
    return this.scheduleService.createRoom6Event(data);
  }

  @Post('room7')
  createRoom7Event(@Body() data: CreateScheduleDto) {
    return this.scheduleService.createRoom7Event(data);
  }
  @Delete('room1/:id')
  async deleteRoom1Event(@Param('id') id: string) {
    return this.scheduleService.deleteRoom1Event(id);
  }

  @Delete('room2/:id')
  async deleteRoom2Event(@Param('id') id: string) {
    return this.scheduleService.deleteRoom2Event(id);
  }

  @Delete('room3/:id')
  async deleteRoom3Event(@Param('id') id: string) {
    return this.scheduleService.deleteRoom3Event(id);
  }
  @Delete('room4/:id')
  async deleteRoom4Event(@Param('id') id: string) {
    return this.scheduleService.deleteRoom4Event(id);
  }

  @Delete('room5/:id')
  async deleteRoom5Event(@Param('id') id: string) {
    return this.scheduleService.deleteRoom5Event(id);
  }

  @Delete('room6/:id')
  async deleteRoom6Event(@Param('id') id: string) {
    return this.scheduleService.deleteRoom6Event(id);
  }
  @Delete('room7/:id')
  async deleteRoom7Event(@Param('id') id: string) {
    return this.scheduleService.deleteRoom7Event(id);
  }

}
