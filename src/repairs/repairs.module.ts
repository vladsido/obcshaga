import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RepairsService } from './repairs.service';
import { RepairsController } from './repairs.controller';
import { RepairRequest } from './repair-request.entity';

@Module({
    imports: [TypeOrmModule.forFeature([RepairRequest])],
    providers: [RepairsService],
    controllers: [RepairsController],
})
export class RepairsModule {}
