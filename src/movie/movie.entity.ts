import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class Movie {

  @PrimaryGeneratedColumn('uuid') //This decorator marks the id property as the primary key of the table
  //he uuid type specifies that the primary key will be a UUID (Universally Unique Identifier).
  id: string;

  @Column({ unique: true })
  name: string;

  @Column({ type: 'int', nullable: true, width: 4 })
  releaseYear: number;

  @Column({ type: 'int', nullable: true })
  rating: number;

}