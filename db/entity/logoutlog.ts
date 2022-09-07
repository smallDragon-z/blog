import { Entity, BaseEntity, PrimaryGeneratedColumn, Column,OneToOne, JoinColumn } from 'typeorm'
import { User } from './user'

@Entity({name: 'logoutlog'})
export class LogoutLog extends BaseEntity {

  @PrimaryGeneratedColumn()
  readonly id!: number;

  @Column()
  date!: string;

  @Column()
  logoutDate!: number;

  @OneToOne(() => User)
  @JoinColumn({name: 'user_id'})
  user!: User;
}