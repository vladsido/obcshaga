import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { RepairsService } from './repairs.service';
import { RepairRequest } from './repair-request.entity';

@Controller('repairs')
export class RepairsController {
    constructor(private readonly repairsService: RepairsService) {}

    @Get()
    findAll(): Promise<RepairRequest[]> {
        return this.repairsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<RepairRequest> {
        return this.repairsService.findOne(+id);
    }

    @Post()
    create(@Body() repairRequest: RepairRequest): Promise<RepairRequest> {
        return this.repairsService.create(repairRequest);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() repairRequest: RepairRequest): Promise<RepairRequest> {
        return this.repairsService.update(+id, repairRequest);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.repairsService.remove(+id);
    }
}
