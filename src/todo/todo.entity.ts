import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'task' })
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  empID: number;
}
