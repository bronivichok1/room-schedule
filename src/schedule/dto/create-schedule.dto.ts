import { IsString, IsDate } from 'class-validator';

export class CreateScheduleDto {
  @IsString()
  title: string;

  @IsDate()
  start: Date;

  @IsDate()
  end: Date;
}
