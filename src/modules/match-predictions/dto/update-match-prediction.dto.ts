import { PartialType } from '@nestjs/mapped-types';

import { CreateMatchPredictionDto } from './create-match-prediction.dto';

export class UpdateMatchPredictionDto extends PartialType(
  CreateMatchPredictionDto,
) {}
