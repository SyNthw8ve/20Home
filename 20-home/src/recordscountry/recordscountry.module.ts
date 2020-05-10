import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecordsCountryService } from './recordscountry.service';
import { RecordsCountryController } from './recordscountry.controller';
import { Recordscountry } from './recordscountry.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Recordscountry])],
    providers: [RecordsCountryService],
    controllers: [RecordsCountryController]
})
export class RecordsCountryModule {}