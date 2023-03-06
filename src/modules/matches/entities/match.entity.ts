import {
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  BeforeUpdate,
} from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity('matches')
export class Match {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: 'varchar',
    nullable: false,
  })
  teamA: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  teamAimage: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  teamB: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  teamBimage: string;

  @Column({
    type: 'timestamp',
    default: () => 'NOW()',
    nullable: false,
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

  @BeforeUpdate()
  async setDeletedAt() {
    if (this.isDeleted) {
      this.deletedAt = new Date();
    }
  }
}
