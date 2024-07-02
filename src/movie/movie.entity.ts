import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class Movie {

  @PrimaryGeneratedColumn() 
  id: number;

  @Column({nullable:false})
  name: string;

  @Column()
  releaseYear: number;

  @Column()
  rating: number;
}
//This decorator marks the id property as the primary key of the table
  //he uuid type specifies that the primary key will be a UUID (Universally Unique Identifier).
