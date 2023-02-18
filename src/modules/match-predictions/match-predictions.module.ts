import { forwardRef, Module } from '@nestjs/common';
import { MatchPredictionsService } from './match-predictions.service';
import { MatchPredictionsController } from './match-predictions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MatchPredictions } from './entities/match-prediction.entity';
import { CreditsModule } from '../credits/credits.module';
import { MatchesModule } from '../matches/matches.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([MatchPredictions]),
    CreditsModule,
    forwardRef(() => MatchesModule),
  ],
  controllers: [MatchPredictionsController],
  providers: [MatchPredictionsService],
  exports: [MatchPredictionsService],
})
export class MatchPredictionsModule {}
