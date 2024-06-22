import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentsService {
    constructor(
        @InjectRepository(Student)
        private studentsRepository: Repository<Student>,
    ) {}

    findAll(): Promise<Student[]> {
        return this.studentsRepository.find();
    }

    findOne(id: number): Promise<Student> {
        return this.studentsRepository.findOne({ where: { id: id }});
    }

    create(student: Student): Promise<Student> {
        return this.studentsRepository.save(student);
    }

    async update(id: number, student: Student): Promise<Student> {
        await this.studentsRepository.update(id, student);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.studentsRepository.delete(id);
    }
}
