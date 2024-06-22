import {ApiProperty} from "@nestjs/swagger";

export class CreateStudentDto {
    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    readonly email: string;

    @ApiProperty()
    readonly password: string;
}
