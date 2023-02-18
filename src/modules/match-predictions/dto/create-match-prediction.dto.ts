import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsPositive, IsString } from 'class-validator';

export class CreateMatchPredictionDto {
  @IsPositive()
  @ApiProperty()
  userId: number;

  @IsPositive()
  @ApiProperty()
  match: number;

  @IsOptional()
  @IsBoolean()
  @ApiProperty()
  isTeamAwins?: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiProperty()
  isTeamBwins?: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiProperty()
  isAdraft?: boolean;

  @IsPositive()
  @ApiProperty()
  betOffer: number;

  @IsPositive()
  @IsOptional()
  @ApiProperty()
  transactionId?: number;

  @IsPositive()
  @ApiProperty()
  ammount?: number;

  @IsString()
  @ApiProperty()
  creditCardCode?: string;
}
