import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Student } from '../students/student.entity';
import {ApiProperty} from "@nestjs/swagger";

@Entity()
export class Room {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    number: string;

    @ApiProperty()
    @Column()
    type: string;

    @ApiProperty()
    @Column()
    capacity: number;

    @ManyToOne(() => Student, student => student.room)
    student: Student;
}
