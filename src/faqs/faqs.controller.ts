import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { FAQsService } from './faqs.service';
import { FAQ } from './faq.entity';

@Controller('faqs')
export class FAQsController {
    constructor(private readonly faqsService: FAQsService) {}

    @Get()
    findAll(): Promise<FAQ[]> {
        return this.faqsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<FAQ> {
        return this.faqsService.findOne(+id);
    }

    @Post()
    create(@Body() faq: FAQ): Promise<FAQ> {
        return this.faqsService.create(faq);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() faq: FAQ): Promise<FAQ> {
        return this.faqsService.update(+id, faq);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.faqsService.remove(+id);
    }
}
