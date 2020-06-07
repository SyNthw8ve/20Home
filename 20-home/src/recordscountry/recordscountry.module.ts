import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecordsCountryService } from './recordscountry.service';
import { RecordsCountryController } from './recordscountry.controller';
import { RecordsCountrySubscriber } from './recordscountry.subscriber';
import { Recordscountry } from './recordscountry.entity';

import { UpdateModule } from '../update/update.module';

@Module({
    imports: [TypeOrmModule.forFeature([Recordscountry]), forwardRef(() => UpdateModule)],
    providers: [RecordsCountryService, RecordsCountrySubscriber],
    controllers: [RecordsCountryController],
    exports: [RecordsCountryService]
})
export class RecordsCountryModule {}