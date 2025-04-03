import { IsString, IsDate, IsNumber} from 'class-validator';

export class CreateScheduleDto {

  @IsNumber()
  number:number;

  @IsString()
  name: string;

  @IsString()
  title: string;

  @IsString()
  titleorg: string;

  @IsDate()
  start: Date;

  @IsDate()
  end: Date;
}
