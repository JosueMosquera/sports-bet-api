import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreditsService } from '../credits/credits.service';
import { MatchesService } from '../matches/matches.service';
import { CreateMatchPredictionDto } from './dto/create-match-prediction.dto';
import { UpdateMatchPredictionDto } from './dto/update-match-prediction.dto';
import { MatchPredictions } from './entities/match-prediction.entity';

@Injectable()
export class MatchPredictionsService {
  constructor(
    @InjectRepository(MatchPredictions)
    private matchPredictionsRepo: Repository<MatchPredictions>,
    private creditService: CreditsService,
    private matchesService: MatchesService,
  ) {}
  async create(createMatchPredictionDto: CreateMatchPredictionDto) {
    const newMatchPrediction = this.matchPredictionsRepo.create(
      createMatchPredictionDto,
    );
    const matchToUpdate = await this.matchesService.findOne(
      createMatchPredictionDto.match,
    );
    await this.matchesService.update(matchToUpdate.id, { isBeted: true });
    const newCredit = await this.creditService.create({
      ammount: createMatchPredictionDto.ammount,
      creditCardCode: createMatchPredictionDto.creditCardCode,
      type: 'DEBITO',
      userId: createMatchPredictionDto.userId,
    });
    newMatchPrediction.transaction = newCredit.createdCredit.id;
    await this.matchPredictionsRepo.save(newMatchPrediction);
    return {
      newMatch: newMatchPrediction,
    };
  }

  async findAll() {
    return await this.matchPredictionsRepo.find({
      relations: ['match', 'transaction', 'userId'],
    });
  }

  async findOne(id: number) {
    return await this.matchPredictionsRepo.findOne(id, {
      relations: ['match', 'transaction', 'userId'],
    });
  }

  async update(id: number, updateMatchPredictionDto: UpdateMatchPredictionDto) {
    const matchToChange: any = await this.findOne(id);
    await this.matchPredictionsRepo.update(
      matchToChange.id,
      updateMatchPredictionDto,
    );
    if (updateMatchPredictionDto.isTeamAwins) {
      await this.matchPredictionsRepo.update(matchToChange.id, {
        isTeamBwins: false,
        isAdraft: false,
      });
    }
    if (updateMatchPredictionDto.isTeamBwins) {
      await this.matchPredictionsRepo.update(matchToChange.id, {
        isTeamAwins: false,
        isAdraft: false,
      });
    }
    if (updateMatchPredictionDto.isAdraft) {
      await this.matchPredictionsRepo.update(matchToChange.id, {
        isTeamAwins: false,
        isTeamBwins: false,
      });
    }
    return {
      matchToChange,
    };
  }

  async remove(id: number) {
    const matchToUpdate = await this.matchPredictionsRepo.findOne(id, {
      relations: ['userId', 'match', 'transaction'],
    });
    let matchWithRelations: any = matchToUpdate;
    const findMatch = await this.matchesService.findOne(
      matchWithRelations.match.id,
    );

    await this.creditService.create({
      ammount: matchWithRelations.transaction.ammount,
      creditCardCode: matchWithRelations.transaction.creditCardCode,
      type: 'INGRESO',
      userId: matchWithRelations.userId.id,
    });
    await this.matchesService.update(findMatch.id, { isBeted: false });
    return await this.matchPredictionsRepo.delete(id);
  }
}
