import { Controller, Post, Body, Req, Res, Get, UnauthorizedException, InternalServerErrorException, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { promisify } from 'util';

interface SessionRequest extends Request {
  session: any;
}

const destroySession = promisify(
  (session: any, callback: (err: any) => void) => session.destroy(callback)
);

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(200)
  async login(
    @Body() body,
    @Req() req: SessionRequest,
  ) {
    const { username, password } = body;
    const user = await this.authService.validateUser(username, password);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    req.session.userId = user.username; 
    req.session.username = user.username;
    req.session.isAuthenticated = true;
    req.session.name = user.name; 
    req.session.title = user.title; 

    return { message: 'Вход успешен', user: { username: user.username, name: user.name, title: user.title } };
  }

  @Get('status')
  @HttpCode(200)
  getStatus(@Req() req: SessionRequest) {
      if (req.session && req.session.isAuthenticated) {
          return {
              isAuthenticated: true,
              userId: req.session.userId,
              username: req.session.username,
              name: req.session.name, 
              title: req.session.title, 
          };
      } else {
          return { isAuthenticated: false, message: 'Не аутентифицирован' };
      }
  }

  @Post('logout')
  @HttpCode(200)
  async logout(@Req() req: SessionRequest, @Res({ passthrough: true }) res: Response) {
    try {
      await destroySession(req.session);
      res.clearCookie('connect.sid');
      return { message: 'Выход выполнен успешно' };
    } catch (err) {
      res.clearCookie('connect.sid');
      throw new InternalServerErrorException('Could not log out');
    }
  }
}
