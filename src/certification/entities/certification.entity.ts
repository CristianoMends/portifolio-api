import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Certification {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string; 

    @Column()
    image: string;
    
    @Column()
    link: string;

    @Column({ type: 'date'})
    date: string;
    
    
    
}
