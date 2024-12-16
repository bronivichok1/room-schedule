import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('room1') // Таблица для первой комнаты
export class ScheduleRoom1 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  start: Date;

  @Column()
  end: Date;
}


@Entity('room2') // Таблица для второй комнаты
export class ScheduleRoom2 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  start: Date;

  @Column()
  end: Date;
}

@Entity('room3') // Таблица для второй комнаты
export class ScheduleRoom3 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  start: Date;

  @Column()
  end: Date;
}

@Entity('room4') // Таблица для второй комнаты
export class ScheduleRoom4 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  start: Date;

  @Column()
  end: Date;
}

@Entity('room5') // Таблица для второй комнаты
export class ScheduleRoom5 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  start: Date;

  @Column()
  end: Date;
}

@Entity('room6') // Таблица для второй комнаты
export class ScheduleRoom6 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  start: Date;

  @Column()
  end: Date;
}

@Entity('room7') // Таблица для второй комнаты
export class ScheduleRoom7 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  start: Date;

  @Column()
  end: Date;
}

