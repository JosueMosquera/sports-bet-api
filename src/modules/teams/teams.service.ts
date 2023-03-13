import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team } from './entities/team.entity';
const cloudinary = require('cloudinary');
const cloudinaryCloud = cloudinary.v2;
cloudinaryCloud.config({
  cloud_name: 'dzz16rbdb',
  api_key: '186842746161464',
  api_secret: '41d-ukG-vs87Pkb19nyLdZ4sH0c',
});
@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team)
    private teamRepo: Repository<Team>,
  ) {}
  async create(createTeamDto: CreateTeamDto, request: any) {
    const { name } = createTeamDto;
    const newTeam = this.teamRepo.create(createTeamDto);

    if (newTeam) {
      const createdTeam = await this.teamRepo.save({ name });

      return createdTeam;
    } else {
      console.log('no se encontro el equipo por el id que ingreso');
    }
  }

  async findAll() {
    return await this.teamRepo.find();
  }

  async findOne(id: number) {
    return await this.teamRepo.findOne(id);
  }

  async update(id: number, updateTeamDto: UpdateTeamDto, file: any) {
    const findTeam = await this.teamRepo.findOne({ id });

    const fileCloudinary = file;

    if (findTeam) {
      const updatedTeam = await this.teamRepo.update(
        { id: findTeam.id },
        { ...updateTeamDto },
      );
      if (fileCloudinary) {
        const { secure_url } = await cloudinaryCloud.uploader.upload(
          fileCloudinary.path,
        );
        await this.teamRepo.update(
          { id: findTeam.id },
          {
            teamImage: secure_url,
          },
        );
      }
      return updatedTeam;
    } else {
      console.log('no se encontro el equipo por el id que ingreso');
    }
  }

  async remove(id: number) {
    return await this.teamRepo.delete(id);
  }
}
