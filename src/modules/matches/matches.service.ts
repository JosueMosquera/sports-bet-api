import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreditsService } from '../credits/credits.service';
import { MatchPredictionsService } from '../match-predictions/match-predictions.service';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { Match } from './entities/match.entity';

@Injectable()
export class MatchesService {
  constructor(
    @InjectRepository(Match)
    private matchRepo: Repository<Match>,
    private creditService: CreditsService,
    @Inject(forwardRef(() => MatchPredictionsService))
    private matchPredictionsService: MatchPredictionsService,
  ) {}
  async create(createMatchDto: CreateMatchDto) {
    const newMatch = this.matchRepo.create(createMatchDto);
    await this.matchRepo.save(newMatch);
    return {
      newMatch,
    };
  }

  async findAll() {
    return await this.matchRepo.find();
  }

  async findOne(id: number) {
    return await this.matchRepo.findOne(id);
  }

  async update(id: number, updateMatchDto: UpdateMatchDto) {
    const matchToChange = await this.findOne(id);
    await this.matchRepo.update(matchToChange.id, updateMatchDto);
    if (updateMatchDto.isMatchFinished) {
      const matches = await this.matchPredictionsService.findAll();
      matches.forEach(async (prediction: any) => {
        if (matchToChange.result === 'isTeamAwins' && prediction.isTeamAwins) {
          const ammount =
            prediction.transaction &&
            prediction.transaction.ammount * matchToChange.betOffer;
          await this.creditService.create({
            ammount,
            creditCardCode: prediction.transaction.creditCardCode,
            type: 'INGRESO',
            userId: prediction.userId.id,
          });
        }
        if (matchToChange.result === 'isTeamBwins' && prediction.isTeamBwins) {
          await this.creditService.create({
            ammount: updateMatchDto.ammount * matchToChange.betOffer,
            creditCardCode: updateMatchDto.creditCardCode,
            type: 'INGRESO',
            userId: updateMatchDto.userId,
          });
        }
        if (matchToChange.result === 'isAdraft' && prediction.isAdraft) {
          await this.creditService.create({
            ammount: updateMatchDto.ammount * matchToChange.betOffer,
            creditCardCode: updateMatchDto.creditCardCode,
            type: 'INGRESO',
            userId: updateMatchDto.userId,
          });
        }
      });
    }
  }

  remove(id: number) {
    return `This action removes a #${id} match`;
  }
}
