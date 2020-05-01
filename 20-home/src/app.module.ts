import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CountryModule } from './country/country.module';
import { RegionModule } from './region/region.module';
import { RecordsCountryModule } from './recordscountry/recordscountry.module';
import { RecordsRegionModule } from './recordsregion/recordsregion.module';
import { NotificationsModule } from './notifications/notifications.module';
import { PointcasesController } from './pointcases/pointcases.controller';
import { PointcasesModule } from './pointcases/pointcases.module';

@Module({
  imports: [
            TypeOrmModule.forRoot(), 
            CountryModule,
            RegionModule,
            RecordsCountryModule,
            RecordsRegionModule,
            NotificationsModule,
            PointcasesModule
          ],
  controllers: [AppController, PointcasesController],
  providers: [AppService],
})
export class AppModule {}
