import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('projects')
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ length: 500 })
  description: string;

  @Column({ nullable: true })
  url: string;

  @Column({ nullable: true })
  repositoryUrl: string;

  @Column({ nullable: true })
  youtubeUrl: string;

  @Column({ nullable: true })
  technologies: string;

  @Column()
  image:string;
  
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;
}
