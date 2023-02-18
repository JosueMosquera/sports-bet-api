import { Test, TestingModule } from '@nestjs/testing';
import { MatchPredictionsController } from './match-predictions.controller';
import { MatchPredictionsService } from './match-predictions.service';

describe('MatchPredictionsController', () => {
  let controller: MatchPredictionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MatchPredictionsController],
      providers: [MatchPredictionsService],
    }).compile();

    controller = module.get<MatchPredictionsController>(MatchPredictionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
