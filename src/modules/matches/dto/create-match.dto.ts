import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsPositive, IsString } from 'class-validator';

export class CreateMatchDto {
  @IsPositive()
  @ApiProperty()
  teamA: number;

  @IsPositive()
  @ApiProperty()
  teamB: number;

  @IsDate()
  @ApiProperty()
  matchDate: Date;

  @IsPositive()
  @ApiProperty()
  betOffer: number;
}
