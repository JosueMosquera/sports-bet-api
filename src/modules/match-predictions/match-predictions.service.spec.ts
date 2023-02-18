import { Test, TestingModule } from '@nestjs/testing';
import { MatchPredictionsService } from './match-predictions.service';

describe('MatchPredictionsService', () => {
  let service: MatchPredictionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MatchPredictionsService],
    }).compile();

    service = module.get<MatchPredictionsService>(MatchPredictionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
