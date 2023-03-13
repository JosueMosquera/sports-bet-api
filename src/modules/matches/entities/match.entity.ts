import {
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { Team } from 'src/modules/teams/entities/team.entity';

@Entity('matches')
export class Match {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    type: 'timestamp',
  })
  matchDate: Date;

  @Column({
    type: 'int',
    nullable: false,
  })
  betOffer: number;

  @Column({
    type: 'boolean',
    default: false,
    nullable: false,
  })
  isDeleted: boolean;

  @Column({
    type: 'boolean',
    default: false,
    nullable: false,
  })
  isMatchStarted: boolean;

  @Column({
    type: 'boolean',
    default: false,
    nullable: false,
  })
  isBeted: boolean;

  @Column({
    type: 'boolean',
    default: false,
    nullable: false,
  })
  isWined: boolean;

  @Column({
    type: 'varchar',
    nullable: false,
    default: 'no result yet',
  })
  result: string;

  @Column({
    type: 'boolean',
    default: false,
    nullable: false,
  })
  isMatchFinished: boolean;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  deletedAt: Date;

  @Exclude()
  @CreateDateColumn({
    type: 'timestamp',
  })
  createdAt: Date;

  @Exclude()
  @UpdateDateColumn({
    type: 'timestamp',
  })
  updatedAt: Date;

  @ManyToOne(() => Team, (team) => team.id)
  teamA: number;

  @ManyToOne(() => Team, (team) => team.id)
  teamB: number;
}
