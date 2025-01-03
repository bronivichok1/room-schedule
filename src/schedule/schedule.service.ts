import { Injectable, NotFoundException  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ScheduleRoom1, ScheduleRoom2, ScheduleRoom3, ScheduleRoom4, ScheduleRoom5, ScheduleRoom6, ScheduleRoom7 } from './schedule.entity';
import { Cron } from '@nestjs/schedule';

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

  async getRoom1Events(): Promise<ScheduleRoom1[]> {
    return this.scheduleRoom1Repository.find();
  }
  async getRoom2Events(): Promise<ScheduleRoom2[]> {
    return this.scheduleRoom2Repository.find();
  }
  async getRoom3Events(): Promise<ScheduleRoom3[]> {
    return this.scheduleRoom3Repository.find();
  }
  async getRoom4Events(): Promise<ScheduleRoom4[]> {
    return this.scheduleRoom4Repository.find();
  }
  async getRoom5Events(): Promise<ScheduleRoom5[]> {
    return this.scheduleRoom5Repository.find();
  }
  async getRoom6Events(): Promise<ScheduleRoom6[]> {
    return this.scheduleRoom6Repository.find();
  }
  async getRoom7Events(): Promise<ScheduleRoom7[]> {
    return this.scheduleRoom7Repository.find();
  }

  async createRoom1Event(data: { title: string; start: Date; end: Date }): Promise<ScheduleRoom1> {
    const event = this.scheduleRoom1Repository.create(data);
    return this.scheduleRoom1Repository.save(event);
  }

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

  async deleteRoom1Event(id: string): Promise<void> {
    const eventId: number = parseInt(id, 10);
    if (isNaN(eventId)) {
      throw new NotFoundException('ID должен быть числом');
    }
    const event = await this.scheduleRoom1Repository.findOne({ where: { id: eventId } });
    if (!event) {
      throw new NotFoundException(`Событие с ID "${eventId}" не найдено`);
    }
    await this.scheduleRoom1Repository.remove(event);
  }

  async deleteRoom2Event(id: string): Promise<void> {
    const eventId: number = parseInt(id, 10);
    if (isNaN(eventId)) {
      throw new NotFoundException('ID должен быть числом');
    }
    const event = await this.scheduleRoom2Repository.findOne({ where: { id: eventId } });
    if (!event) {
      throw new NotFoundException(`Событие с ID "${eventId}" не найдено`);
    }
    await this.scheduleRoom2Repository.remove(event);
  }

  async deleteRoom3Event(id: string): Promise<void> {
    const eventId: number = parseInt(id, 10);
    if (isNaN(eventId)) {
      throw new NotFoundException('ID должен быть числом');
    }
    const event = await this.scheduleRoom3Repository.findOne({ where: { id: eventId } });
    if (!event) {
      throw new NotFoundException(`Событие с ID "${eventId}" не найдено`);
    }
    await this.scheduleRoom3Repository.remove(event);
  }

  async deleteRoom4Event(id: string): Promise<void> {
    const eventId: number = parseInt(id, 10);
    if (isNaN(eventId)) {
      throw new NotFoundException('ID должен быть числом');
    }
    const event = await this.scheduleRoom4Repository.findOne({ where: { id: eventId } });
    if (!event) {
      throw new NotFoundException(`Событие с ID "${eventId}" не найдено`);
    }
    await this.scheduleRoom4Repository.remove(event);
  }

  async deleteRoom5Event(id: string): Promise<void> {
    const eventId: number = parseInt(id, 10);
    if (isNaN(eventId)) {
      throw new NotFoundException('ID должен быть числом');
    }
    const event = await this.scheduleRoom5Repository.findOne({ where: { id: eventId } });
    if (!event) {
      throw new NotFoundException(`Событие с ID "${eventId}" не найдено`);
    }
    await this.scheduleRoom5Repository.remove(event);
  }

  async deleteRoom6Event(id: string): Promise<void> {
    const eventId: number = parseInt(id, 10);
    if (isNaN(eventId)) {
      throw new NotFoundException('ID должен быть числом');
    }
    const event = await this.scheduleRoom6Repository.findOne({ where: { id: eventId } });
    if (!event) {
      throw new NotFoundException(`Событие с ID "${eventId}" не найдено`);
    }
    await this.scheduleRoom6Repository.remove(event);
  }

  async deleteRoom7Event(id: string): Promise<void> {
    const eventId: number = parseInt(id, 10);
    if (isNaN(eventId)) {
      throw new NotFoundException('ID должен быть числом');
    }
    const event = await this.scheduleRoom7Repository.findOne({ where: { id: eventId } });
    if (!event) {
      throw new NotFoundException(`Событие с ID "${eventId}" не найдено`);
    }
    await this.scheduleRoom7Repository.remove(event);
  }



async deleteOldEvents() {
  const oneMonthsAgo = new Date();
  oneMonthsAgo.setMonth(oneMonthsAgo.getMonth() - 1);

  await this.deleteOldEventsFromRoom(this.scheduleRoom1Repository, oneMonthsAgo);
  await this.deleteOldEventsFromRoom(this.scheduleRoom2Repository, oneMonthsAgo);
  await this.deleteOldEventsFromRoom(this.scheduleRoom3Repository, oneMonthsAgo);
  await this.deleteOldEventsFromRoom(this.scheduleRoom4Repository, oneMonthsAgo);
  await this.deleteOldEventsFromRoom(this.scheduleRoom5Repository, oneMonthsAgo);
  await this.deleteOldEventsFromRoom(this.scheduleRoom6Repository, oneMonthsAgo);
  await this.deleteOldEventsFromRoom(this.scheduleRoom7Repository, oneMonthsAgo);
}

private async deleteOldEventsFromRoom(repository: Repository<any>, thresholdDate: Date) {
  await repository.createQueryBuilder()
    .delete()
    .from(repository.metadata.name)
    .where('start < :date', { date: thresholdDate })
    .execute();
}

@Cron('0 0 * * *')
handleCron() {
  this.deleteOldEvents();
}
}
