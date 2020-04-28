import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecordsCountryService } from './recordscountry.service';
import { RecordsCountryController } from './recordscountry.controller';
import { RecordsCountry } from './recordscountry.entity';

@Module({
    imports: [TypeOrmModule.forFeature([RecordsCountry])],
    providers: [RecordsCountryService],
    controllers: [RecordsCountryController]
})
export class RecordsCountryModule {}