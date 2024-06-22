import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FAQ } from './faq.entity';

@Injectable()
export class FAQsService {
    constructor(
        @InjectRepository(FAQ)
        private faqsRepository: Repository<FAQ>,
    ) {}

    findAll(): Promise<FAQ[]> {
        return this.faqsRepository.find();
    }

    findOne(id: number): Promise<FAQ> {
        return this.faqsRepository.findOne({ where: { id: id }});
    }

    create(faq: FAQ): Promise<FAQ> {
        return this.faqsRepository.save(faq);
    }

    async update(id: number, faq: FAQ): Promise<FAQ> {
        await this.faqsRepository.update(id, faq);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.faqsRepository.delete(id);
    }
}
