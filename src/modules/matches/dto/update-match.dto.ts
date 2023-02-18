import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsPositive, IsString } from 'class-validator';
import { CreateMatchDto } from './create-match.dto';

export class UpdateMatchDto extends PartialType(CreateMatchDto) {
  @IsOptional()
  @IsBoolean()
  @ApiProperty()
  isMatchStarted?: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiProperty()
  isMatchFinished?: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiProperty()
  isBeted?: boolean;

  @IsOptional()
  @IsString()
  @ApiProperty()
  result?: string;

  @IsOptional()
  @IsPositive()
  @ApiProperty()
  ammount?: number;

  @IsOptional()
  @IsPositive()
  @ApiProperty()
  userId?: number;

  @IsOptional()
  @IsString()
  @ApiProperty()
  creditCardCode?: string;
}
