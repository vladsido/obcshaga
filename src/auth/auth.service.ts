import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from '../students/student.entity';
import { CreateStudentDto } from './dto/create-student.dto';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Student)
        private studentsRepository: Repository<Student>,
        private jwtService: JwtService,
    ) {}

    async register(createStudentDto: CreateStudentDto): Promise<Student> {
        const { name, email, password } = createStudentDto;
        const hashedPassword = await bcrypt.hash(password, 10);
        const student = this.studentsRepository.create({ name, email, password: hashedPassword });
        return this.studentsRepository.save(student);
    }

    async validateStudent(email: string, password: string): Promise<Student> {
        const student = await this.studentsRepository.findOne({ where: { email } });
        if (student && await bcrypt.compare(password, student.password)) {
            return student;
        }
        return null;
    }

    async login(loginDto: LoginDto): Promise<{ accessToken: string }> {
        const { email, password } = loginDto;
        const student = await this.validateStudent(email, password);
        if (!student) {
            throw new Error('Invalid credentials');
        }
        const payload = { email: student.email, sub: student.id, role: student.role };
        return { accessToken: this.jwtService.sign(payload) };
    }
}
