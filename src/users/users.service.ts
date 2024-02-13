import { Injectable } from '@nestjs/common';
import { CreateUser, User } from './users.state';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 0, name: 'luffy' },
    { id: 1, name: 'Zoro' },
  ];

  findAll(): User[] {
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