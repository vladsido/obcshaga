import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Student } from '../students/student.entity';
import {ApiProperty} from "@nestjs/swagger";

@Entity()
export class RepairRequest {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    description: string;

    @ApiProperty()
    @Column()
    status: string;

    @ManyToOne(() => Student, student => student.repairRequests)
    student: Student;
}
