import {Controller, Get, Post, Body, Param, Put, Delete, UseGuards} from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { Application } from './application.entity';
import {JwtAuthGuard} from "../auth/jwt-auth.guard";

@Controller('applications')
export class ApplicationsController {
    constructor(private readonly applicationsService: ApplicationsService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    findAll(): Promise<Application[]> {
        return this.applicationsService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Application> {
        return this.applicationsService.findOne(+id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() application: Application): Promise<Application> {
        return this.applicationsService.create(application);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    update(@Param('id') id: string, @Body() application: Application): Promise<Application> {
        return this.applicationsService.update(+id, application);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.applicationsService.remove(+id);
    }
}
