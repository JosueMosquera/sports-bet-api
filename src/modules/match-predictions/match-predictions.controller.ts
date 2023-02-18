import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MatchPredictionsService } from './match-predictions.service';
import { CreateMatchPredictionDto } from './dto/create-match-prediction.dto';
import { UpdateMatchPredictionDto } from './dto/update-match-prediction.dto';

@Controller('match-predictions')
export class MatchPredictionsController {
  constructor(
    private readonly matchPredictionsService: MatchPredictionsService,
  ) {}

  @Post()
  create(@Body() createMatchPredictionDto: CreateMatchPredictionDto) {
    return this.matchPredictionsService.create(createMatchPredictionDto);
  }

  @Get()
  findAll() {
    return this.matchPredictionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.matchPredictionsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMatchPredictionDto: UpdateMatchPredictionDto,
  ) {
    return this.matchPredictionsService.update(+id, updateMatchPredictionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.matchPredictionsService.remove(+id);
  }
}
