import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
// import { AppService } from './app.service';
// import { AuthenticatedGuard } from './auth/authenticated.guard';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return this.authService.login(req.user);
    // return { msg: 'Logged in' };
  }

  // @UseGuards(AuthenticatedGuard)
  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(@Request() req): string {
    // require Bearer token, validate token
    return req.user;
  }
}
