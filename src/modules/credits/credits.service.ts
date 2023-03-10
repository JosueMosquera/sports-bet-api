import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthService } from '../auth/auth.service';
import { CreateCreditDto } from './dto/create-credit.dto';
import { UpdateCreditDto } from './dto/update-credit.dto';
import { Credit } from './entities/credit.entity';

@Injectable()
export class CreditsService {
  constructor(
    @InjectRepository(Credit)
    private creditRepo: Repository<Credit>,
    private authService: AuthService,
  ) {}
  async create(createCreditDto: CreateCreditDto) {
    const newCredit = this.creditRepo.create(createCreditDto);
    const user = await this.authService.findOne(newCredit.userId);

    await this.creditRepo.save(newCredit);
    if (newCredit.type === 'INGRESO') {
      await this.authService.update(newCredit.userId, {
        availableCredits: user.availableCredits + newCredit.ammount,
        creditCardCode: newCredit.creditCardCode,
      });
    } else if (
      newCredit.type === 'DEBITO' &&
      user.availableCredits >= newCredit.ammount
    ) {
      await this.authService.update(newCredit.userId, {
        availableCredits: user.availableCredits - newCredit.ammount,
        creditCardCode: newCredit.creditCardCode,
      });
    }
    return {
      createdCredit: newCredit,
    };
  }

  findAll() {
    return `This action returns all credits`;
  }

  async findAllByUser(userId: number) {
    return this.creditRepo.find({ where: { userId } });
  }

  async findOne(id: number) {
    return await this.creditRepo.findOne(id);
  }

  update(id: number, updateCreditDto: UpdateCreditDto) {
    return `This action updates a #${id} credit`;
  }

  remove(id: number) {
    return `This action removes a #${id} credit`;
  }
}
