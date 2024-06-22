import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    async register(@Body() createStudentDto: CreateStudentDto) {
        return this.authService.register(createStudentDto);
    }

    @Post('login')
    async login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto);
    }
}
