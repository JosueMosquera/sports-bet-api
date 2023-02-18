import { ApiProperty } from '@nestjs/swagger';
import { IsPositive, IsString } from 'class-validator';

export class CreateCreditDto {
  @IsPositive()
  @ApiProperty()
  ammount: number;

  @IsString()
  @ApiProperty()
  type: string;

  @IsString()
  @ApiProperty()
  creditCardCode: string;

  @IsPositive()
  @ApiProperty()
  userId: number;
}
