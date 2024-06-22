import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { StudentsService } from './students.service';
import { Student } from './student.entity';

@Controller('students')
export class StudentsController {
    constructor(private readonly studentsService: StudentsService) {}

    @Get()
    findAll(): Promise<Student[]> {
        return this.studentsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Student> {
        return this.studentsService.findOne(+id);
    }

    @Post()
    create(@Body() student: Student): Promise<Student> {
        return this.studentsService.create(student);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() student: Student): Promise<Student> {
        return this.studentsService.update(+id, student);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.studentsService.remove(+id);
    }
}
