import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class HardSkill {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
  
    @Column({ type: 'date' })
    acquiredDate: string;
  
    @Column({ nullable: true })
    imageUrl: string; 
}
