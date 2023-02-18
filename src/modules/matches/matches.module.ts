import { forwardRef, Module } from '@nestjs/common';
import { MatchesService } from './matches.service';
import { MatchesController } from './matches.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Match } from './entities/match.entity';
import { CreditsModule } from '../credits/credits.module';
import { MatchPredictionsModule } from '../match-predictions/match-predictions.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Match]),
    CreditsModule,
    forwardRef(() => MatchPredictionsModule),
  ],
  controllers: [MatchesController],
  providers: [MatchesService],
  exports: [MatchesService],
})
export class MatchesModule {}
