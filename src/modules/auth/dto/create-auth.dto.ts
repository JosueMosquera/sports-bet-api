import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';

export class CreateAuthDto {
  @IsString()
  @ApiProperty()
  userName: string;

  @IsString()
  @ApiProperty()
  password: string;

  @IsBoolean()
  @ApiProperty()
  isAdmin: boolean;

  @IsString()
  @ApiProperty()
  userEmail: string;
}
