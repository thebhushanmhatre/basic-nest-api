import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, MaxLength } from 'class-validator';

export class User {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}

export class CreateUser {
  @ApiProperty()
  @IsAlphanumeric()
  @MaxLength(10)
  name: string;
}
