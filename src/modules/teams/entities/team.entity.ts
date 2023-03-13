import {
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
} from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity('teams')
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  name: string;

  @Column({
    type: 'varchar',
    nullable: false,
    default: 'no image',
  })
  teamImage: string;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  deletedAt: Date;

  @CreateDateColumn({
    type: 'timestamp',
  })
  createdAt: Date;

  @Exclude()
  @UpdateDateColumn({
    type: 'timestamp',
  })
  updatedAt: Date;
}
