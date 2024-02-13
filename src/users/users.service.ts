import { Injectable } from '@nestjs/common';
import { CreateUser, User } from './users.dto';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 0, name: 'luffy' },
    { id: 1, name: 'zoro' },
    { id: 2, name: 'nami' },
    { id: 3, name: 'sanji' },
    { id: 4, name: 'ussopp' },
  ];

  findAll(name?: string): User[] {
    if (name) {
      return this.users.filter(user => user.name === name);
    }
    return this.users;
  }

  findById(userId: number): User {
    return this.users.find((user: any) => user.id == userId);
  }

  createUser(createUserObj: CreateUser): User {
    const newUser = { id: this.users.length, ...createUserObj };
    this.users.push(newUser);
    return newUser;
  }
}
