import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { Pointcases } from './pointcases.entity';
import { PointcasesService } from './pointcases.service';
import { NewCaseDto } from './pointcases.dto';

@Controller('pointcases')
export class PointcasesController {

    constructor(private cases_service: PointcasesService) {}

    @Get('')
    find_all() : Promise<Pointcases[]> {

        return this.cases_service.find_all();
    }

    @Get(':region_name')
    find_regions(@Param() params): Promise<Pointcases[]> {

        return this.cases_service.find_region(params.region_name);
    }

    @Get(':date')
    find_date(@Param() params): Promise<Pointcases[]> {

        return this.cases_service.find_date(params.date);
    }

    @Post('new')
    insert_new_case(@Body() new_case: NewCaseDto): void {


    }
}
