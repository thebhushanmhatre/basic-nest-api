import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(userName: string, secret: string): Promise<any> {
    const user = await this.usersService.findOne(userName);

    if (user && user.password === secret) {
      const { password, username, ...rest } = user;
      return rest;
    }

    return null;
  }
}
