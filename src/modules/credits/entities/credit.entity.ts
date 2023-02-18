import {
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  ManyToOne,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { User } from 'src/modules/auth/entities/auth.entity';

@Entity('credits')
export class Credit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'float',
    nullable: false,
  })
  ammount: number;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  type: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  creditCardCode: string;

  @Column({
    type: 'boolean',
    default: false,
    nullable: false,
  })
  isDeleted: boolean;

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

  @ManyToOne(() => User, (user) => user.id)
  userId: number;
}
