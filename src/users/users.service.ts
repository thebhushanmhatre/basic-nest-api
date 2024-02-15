import { Injectable } from '@nestjs/common';
// import { CreateUser, User } from './users.dto';

export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    { id: 0, name: 'luffy', username: 'luffy', password: 'luffy' },
    { id: 1, name: 'zoro', username: 'zoro', password: 'zoro' },
    { id: 2, name: 'nami', username: 'nami', password: 'nami' },
    { id: 3, name: 'sanji', username: 'sanji', password: 'sanji' },
    { id: 4, name: 'ussopp', username: 'ussopp', password: 'ussopp' },
  ];

  findOne(userName: string): User {
    return this.users.find((user: any) => user.username == userName);
  }

  // findAll(name?: string): User[] {
  //   if (name) {
  //     return this.users.filter((user) => user.name === name);
  //   }
  //   return this.users;
  // }

  // findById(userId: number): User {
  //   return this.users.find((user: any) => user.id == userId);
  // }

  // createUser(createUserObj: CreateUser): User {
  //   const newUser = { id: this.users.length, ...createUserObj };
  //   this.users.push(newUser);
  //   return newUser;
  // }
}
