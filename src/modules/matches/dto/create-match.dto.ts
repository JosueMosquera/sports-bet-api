import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsPositive, IsString } from 'class-validator';

export class CreateMatchDto {
  @IsString()
  @ApiProperty()
  teamA: string;

  @IsString()
  @ApiProperty()
  teamAimage: string;

  @IsString()
  @ApiProperty()
  teamB: string;

  @IsString()
  @ApiProperty()
  teamBimage: string;

  @IsDate()
  @ApiProperty()
  matchDate: Date;

  @IsPositive()
  @ApiProperty()
  betOffer: number;
}
