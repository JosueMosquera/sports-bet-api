import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { TeamsService } from './teams.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Request } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Post()
  create(@Body() createTeamDto: CreateTeamDto, @Req() request: any) {
    return this.teamsService.create(createTeamDto, request);
  }

  @Get()
  findAll() {
    return this.teamsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamsService.findOne(+id);
  }

  @Patch(':id')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: 'temp/',
        filename: (req, file, cb) => {
          const splittedName = file.originalname.split('.');
          const ext = splittedName[splittedName.length - 1];

          cb(null, `${file.originalname}.${ext}`);
        },
      }),
    }),
  )
  update(
    @Param('id') id: string,
    @Body() updateTeamDto: UpdateTeamDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.teamsService.update(+id, updateTeamDto, file);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teamsService.remove(+id);
  }
}
