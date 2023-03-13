import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsPositive, IsString } from 'class-validator';
import { CreateAuthDto } from './create-auth.dto';

export class UpdateAuthDto extends PartialType(CreateAuthDto) {
  @IsPositive()
  @ApiProperty()
  availableCredits?: number;

  @IsString()
  @ApiProperty()
  creditCardCode?: string;
}
