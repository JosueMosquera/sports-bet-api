import {
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  BeforeUpdate,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { User } from 'src/modules/auth/entities/auth.entity';
import { Match } from 'src/modules/matches/entities/match.entity';
import { Credit } from 'src/modules/credits/entities/credit.entity';

@Entity('match-predictions')
export class MatchPredictions {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id)
  userId: number;

  @OneToOne(() => Match, (match) => match.id)
  @JoinColumn()
  match: number;

  @OneToOne(() => Credit, (credit) => credit.id)
  @JoinColumn()
  transaction: number;

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
  isTeamAwins: boolean;
  @Column({
    type: 'boolean',
    default: false,
    nullable: false,
  })
  isTeamBwins: boolean;
  @Column({
    type: 'boolean',
    default: false,
    nullable: false,
  })
  isAdraft: boolean;

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

  @BeforeUpdate()
  async setDeletedAt() {
    if (this.isDeleted) {
      this.deletedAt = new Date();
    }
  }
}
