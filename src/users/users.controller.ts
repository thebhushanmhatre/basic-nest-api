import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUser, User } from './users.state';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @Get()
  getUsers(): User[] {
    return this.usersService.findAll();
  }

  @Get(':id')
  getUserById(@Param('id') id: number): User {
    return this.usersService.findById(id);
  }

  @Post()
  createUser(@Body() body: CreateUser): User {
    return this.usersService.createUser(body);
  }
}
