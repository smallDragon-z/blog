import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { User } from './user'

@Entity({name: 'loginlog'})
export class LoginLog extends BaseEntity {

  @PrimaryGeneratedColumn()
  readonly id!: number;

  @Column()
  date!: string;

  @Column()
  loginDate!: number;

  @ManyToOne(() => User)
  @JoinColumn({name: 'user_id'})
  user!: User;
}