import { Controller, Post, Body, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { Get } from '@nestjs/common';


@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    async login(@Body() body, @Res() res: Response, @Req() req: Request) {
        const { username, password } = body;
        try {
            const user = await this.authService.validateUser(username, password);
            // Сохраняем идентификатор пользователя в сессии
            return res.status(200).json({ message: 'Login successful', user });
        } catch (error) {
            return res.status(401).json({ message: 'Authentication failed', error: error.message });
        }
    }

    @Post('logout')
    async logout(@Req() req: Request, @Res() res: Response) {
        req.session.destroy(err => {
            if (err) {
                return res.status(500).json({ message: 'Could not log out' });
            }
            return res.status(200).json({ message: 'Logout successful' });
        });
    }

}
