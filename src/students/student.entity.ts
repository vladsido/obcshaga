import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne } from 'typeorm';
import { Application } from '../applications/application.entity';
import { Room } from '../rooms/room.entity';
import { RepairRequest } from '../repairs/repair-request.entity';
import {ApiProperty} from "@nestjs/swagger";

@Entity()
export class Student {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    name: string;

    @ApiProperty()
    @Column({ unique: true })
    email: string;

    @ApiProperty()
    @Column()
    password: string;

    @ApiProperty()
    @Column({ default: 'student' })
    role: string;

    @OneToMany(() => Application, application => application.student)
    applications: Application[];

    @OneToOne(() => Room, room => room.student)
    room: Room;

    @OneToMany(() => RepairRequest, repairRequest => repairRequest.student)
    repairRequests: RepairRequest[];
}
