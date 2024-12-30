import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Analytics {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    origin:string
  
    @Column()
    accessDate: Date;
}
