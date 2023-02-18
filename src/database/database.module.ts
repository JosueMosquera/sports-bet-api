import { Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getMetadataArgsStorage } from 'typeorm';
import config from '../config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: async (configService: ConfigType<typeof config>) => {
        const {
          host,
          name: database,
          password,
          port,
          user: username,
        } = configService.database.mysql;
        return {
          type: 'mysql',
          host,
          port,
          database,
          username,
          password,
          synchronize: false,
          autoLoadEntities: true,
          timezone: '-05:00',
          entities: getMetadataArgsStorage().tables.map((tbl) => tbl.target),
        };
      },
    }),
  ],
})
export class DatabaseModule {}
