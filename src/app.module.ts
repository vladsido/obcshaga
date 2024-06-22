import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Application } from './applications/application.entity';
import { Room } from './rooms/room.entity';
import { RepairRequest } from './repairs/repair-request.entity';
import { FAQ } from './faqs/faq.entity';
import { Student } from './students/student.entity';
import {ApplicationsModule} from "./applications/applications.module";
import {RoomsModule} from "./rooms/rooms.module";
import {RepairsModule} from "./repairs/repairs.module";
import {FAQsModule} from "./faqs/faqs.module";
import {StudentsModule} from "./students/students.module";
import {AuthModule} from "./auth/auth.module";


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'drm_db',
      entities: [Application, Room, RepairRequest, FAQ, Student],
      synchronize: true,
    }),
    ApplicationsModule,
    RoomsModule,
    RepairsModule,
    FAQsModule,
    StudentsModule,
    AuthModule,
    TypeOrmModule.forFeature([Application, Room, RepairRequest, FAQ, Student]),
  ],
})
export class AppModule {}
