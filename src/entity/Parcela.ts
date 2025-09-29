// src/entity/Parcela.ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Parcela {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column()
  ubicacion!: string;

  @Column("float")
  tamaño!: number;

  @Column({ default: true })
  activa!: boolean;
}
