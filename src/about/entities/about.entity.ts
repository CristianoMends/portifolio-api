import { Column, Entity, PrimaryGeneratedColumn, Table } from "typeorm";

@Entity()
export class About {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    description:string;

}
