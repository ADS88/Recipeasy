import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  PrimaryColumn,
  BeforeInsert,
} from "typeorm"

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string
}
