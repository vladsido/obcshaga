import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FAQsService } from './faqs.service';
import { FAQsController } from './faqs.controller';
import { FAQ } from './faq.entity';

@Module({
    imports: [TypeOrmModule.forFeature([FAQ])],
    providers: [FAQsService],
    controllers: [FAQsController],
})
export class FAQsModule {}
