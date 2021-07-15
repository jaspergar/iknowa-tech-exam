import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { User } from 'src/user/models/entities/user.entity';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService : AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) : Promise<any> {
        return this.authService.login(req.user);
    }

    //get auth user
    @UseGuards(JwtAuthGuard)
    @Get('user')
    getAuthUser(@Request() req): string {
        return req.user;
    }
}
