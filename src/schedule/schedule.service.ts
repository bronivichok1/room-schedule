import { Injectable, NotFoundException  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ScheduleRoom} from './schedule.entity';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectRepository(ScheduleRoom)
    private scheduleRoomRepository: Repository<ScheduleRoom>,

  ) {}

  async getRoomEvents(number: string): Promise<ScheduleRoom[]> {
    const eventNumber: number = parseInt(number, 10);
    if (isNaN(eventNumber)) {
      throw new NotFoundException('ID должен быть числом');
    }
    else{
    return this.scheduleRoomRepository.find({ where: { number:eventNumber } });
    }
  }

  async getStatusEvents(): Promise<any[]> {
    const roomsStatus = [];
  
    for (let roomNumber = 1; roomNumber <= 6; roomNumber++) {

      const events = await this.scheduleRoomRepository.find({ where: { number: roomNumber } });
      const now = new Date(); 
  
      const activeEvent = events.find(event => now >= event.start && now <= event.end);
  
      if (activeEvent) {
        roomsStatus.push({
          number: roomNumber,
          name: activeEvent.name,
          title: activeEvent.title,
          start: activeEvent.start,
          end: activeEvent.end,
          status: true,
        });
      } else {
        roomsStatus.push({
          number: roomNumber,
          status: false,
        });
      }
    }
  
    return roomsStatus;
  }
  
  
  
  async createRoomEvent(data: { number:number; name:string; title: string; start: Date; end: Date }): Promise<ScheduleRoom> {
    const event = this.scheduleRoomRepository.create(data);
    return this.scheduleRoomRepository.save(event);
  }

  async deleteRoomEvent(id: string): Promise<void> {
    const eventId: number = parseInt(id, 10);
    if (isNaN(eventId)) {
      throw new NotFoundException('ID должен быть числом');
    }
    const event = await this.scheduleRoomRepository.findOne({ where: { id: eventId } });
    if (!event) {
      throw new NotFoundException(`Событие с ID "${eventId}" не найдено`);
    }
    await this.scheduleRoomRepository.remove(event);
  }


async deleteOldEvents() {
  const oneMonthsAgo = new Date();
  oneMonthsAgo.setMonth(oneMonthsAgo.getMonth() - 1);

  await this.deleteOldEventsFromRoom(this.scheduleRoomRepository, oneMonthsAgo);

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
