import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { User } from './entities/auth.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private authRepo: Repository<User>,
  ) {}
  async create(createAuthDto: CreateAuthDto) {
    const newUser = this.authRepo.create(createAuthDto);
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(newUser.password, saltOrRounds);
    newUser.password = hashedPassword;
    await this.authRepo.save(newUser);
    return {
      newUser: newUser,
    };
  }
  async login(params: { email: string; password: string }) {
    const { email, password } = params;
    const userToCompare = await this.findOneByUserEmail(email);
    const isMatch = await bcrypt.compare(password, userToCompare.password);
    if (isMatch) {
      return {
        user: userToCompare,
      };
    }
  }

  findAll() {
    return `This action returns all auth`;
  }

  async findOneByUserEmail(email: string) {
    return await this.authRepo.findOne({ where: { userEmail: email } });
  }

  async findOne(id: number) {
    return await this.authRepo.findOne({ where: { id } });
  }

  async update(id: number, updateAuthDto: UpdateAuthDto) {
    const availableCredits = await this.authRepo.update(id, {
      availableCredits: updateAuthDto.availableCredits,
    });
    const creditCardCode = await this.authRepo.update(id, {
      creditCardCode: updateAuthDto.creditCardCode,
    });
    return {
      availableCredits,
      creditCardCode,
    };
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
