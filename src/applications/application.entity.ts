import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Student } from '../students/student.entity';
import {ApiProperty} from "@nestjs/swagger";

@Entity()
export class Application {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    type: string;

    @ApiProperty()
    @Column()
    status: string;

    @ApiProperty()
    @ManyToOne(() => Student, student => student.applications)
    student: Student;
}
