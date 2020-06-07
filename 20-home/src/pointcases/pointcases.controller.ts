import { Controller, Get, Param, Post, Body, UseGuards } from '@nestjs/common';
import { Pointcases } from './pointcases.entity';
import { PointcasesService } from './pointcases.service';
import { NewCaseDto } from './pointcases.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('pointcases')
export class PointcasesController {

    constructor(private cases_service: PointcasesService) {}

    @UseGuards(JwtAuthGuard)
    @Get('')
    find_all() : Promise<Pointcases[]> {

        return this.cases_service.find_all();
    }

    @UseGuards(JwtAuthGuard)
    @Post('new')
    insert_new_case(@Body() new_case: NewCaseDto): Object {

        return this.cases_service.insert_new_case(new_case);
    }
}
