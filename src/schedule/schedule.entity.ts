import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('room') 
export class ScheduleRoom {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  number: number;

  @Column()
  name: string;

  @Column()
  title: string;

  @Column()
  start: Date;

  @Column()
  end: Date;
}
