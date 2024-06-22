import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RepairRequest } from './repair-request.entity';

@Injectable()
export class RepairsService {
    constructor(
        @InjectRepository(RepairRequest)
        private repairsRepository: Repository<RepairRequest>,
    ) {}

    findAll(): Promise<RepairRequest[]> {
        return this.repairsRepository.find();
    }

    findOne(id: number): Promise<RepairRequest> {
        return this.repairsRepository.findOne({ where: { id: id }});
    }

    create(repairRequest: RepairRequest): Promise<RepairRequest> {
        return this.repairsRepository.save(repairRequest);
    }

    async update(id: number, repairRequest: RepairRequest): Promise<RepairRequest> {
        await this.repairsRepository.update(id, repairRequest);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.repairsRepository.delete(id);
    }
}
