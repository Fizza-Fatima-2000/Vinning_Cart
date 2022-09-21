import { Todo } from 'src/todo/entities/todo.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Username: string;

  @Column()
  Email: string;

  @Column()
  Phone_Number: string;

  @Column()
  Password: string;

  @Column()
  Date_Of_Birth: Date;
  @Column()
  Gender: string;

  // one user can have multipe todos
  @OneToMany(() => Todo, (todo) => todo.user)
  todos: Todo[];
  email: string;
}
