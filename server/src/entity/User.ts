import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  PrimaryColumn,
  BeforeInsert,
  BaseEntity,
} from "typeorm"

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  firstName!: string

  @Column()
  lastName!: string

  @Column()
  age!: number
}
