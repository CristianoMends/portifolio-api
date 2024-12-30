import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Analytics {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    origin:string
  
    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    accessDate: string;
}
