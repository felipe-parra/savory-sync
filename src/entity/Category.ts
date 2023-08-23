import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Food } from "./Food";

@Entity("category")
export class Category {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  parentId?: string;

  @Column({ nullable: true })
  image?: string;

  @Column({ nullable: true })
  icon?: string;

  @OneToMany(() => Food, (food) => food.categories)
  foods: Food[];
}
