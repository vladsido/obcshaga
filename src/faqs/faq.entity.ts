import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import {ApiProperty} from "@nestjs/swagger";

@Entity()
export class FAQ {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    question: string;

    @ApiProperty()
    @Column()
    answer: string;
}
