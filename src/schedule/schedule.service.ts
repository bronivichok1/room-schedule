import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ScheduleRoom1, ScheduleRoom2, ScheduleRoom3, ScheduleRoom4, ScheduleRoom5, ScheduleRoom6, ScheduleRoom7 } from './schedule.entity';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectRepository(ScheduleRoom1)
    private scheduleRoom1Repository: Repository<ScheduleRoom1>,
    @InjectRepository(ScheduleRoom2)
    private scheduleRoom2Repository: Repository<ScheduleRoom2>,
    @InjectRepository(ScheduleRoom3)
    private scheduleRoom3Repository: Repository<ScheduleRoom3>,
    @InjectRepository(ScheduleRoom4)
    private scheduleRoom4Repository: Repository<ScheduleRoom4>,
    @InjectRepository(ScheduleRoom5)
    private scheduleRoom5Repository: Repository<ScheduleRoom5>,
    @InjectRepository(ScheduleRoom6)
    private scheduleRoom6Repository: Repository<ScheduleRoom6>,
    @InjectRepository(ScheduleRoom7)
    private scheduleRoom7Repository: Repository<ScheduleRoom7>,

  ) {}

  // Метод для добавления события в первую комнату
  async createRoom1Event(data: { title: string; start: Date; end: Date }): Promise<ScheduleRoom1> {
    const event = this.scheduleRoom1Repository.create(data);
    return this.scheduleRoom1Repository.save(event);
  }

  // Метод для добавления события во вторую комнату
  async createRoom2Event(data: { title: string; start: Date; end: Date }): Promise<ScheduleRoom2> {
    const event = this.scheduleRoom2Repository.create(data);
    return this.scheduleRoom2Repository.save(event);
  }

  async createRoom3Event(data: { title: string; start: Date; end: Date }): Promise<ScheduleRoom3> {
    const event = this.scheduleRoom3Repository.create(data);
    return this.scheduleRoom3Repository.save(event);
  }

  async createRoom4Event(data: { title: string; start: Date; end: Date }): Promise<ScheduleRoom4> {
    const event = this.scheduleRoom4Repository.create(data);
    return this.scheduleRoom4Repository.save(event);
  }

  async createRoom5Event(data: { title: string; start: Date; end: Date }): Promise<ScheduleRoom5> {
    const event = this.scheduleRoom5Repository.create(data);
    return this.scheduleRoom5Repository.save(event);
  }

  async createRoom6Event(data: { title: string; start: Date; end: Date }): Promise<ScheduleRoom6> {
    const event = this.scheduleRoom6Repository.create(data);
    return this.scheduleRoom6Repository.save(event);
  }

  async createRoom7Event(data: { title: string; start: Date; end: Date }): Promise<ScheduleRoom7> {
    const event = this.scheduleRoom7Repository.create(data);
    return this.scheduleRoom7Repository.save(event);
  }


  // Добавьте дополнительные методы для других комнат
}
