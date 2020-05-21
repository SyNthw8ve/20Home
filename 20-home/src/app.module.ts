import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import { HttpModule } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';

import { CountryModule } from './country/country.module';
import { RegionModule } from './region/region.module';
import { RecordsCountryModule } from './recordscountry/recordscountry.module';
import { RecordsRegionModule } from './recordsregion/recordsregion.module';
import { NotificationsModule } from './notifications/notifications.module';
import { PointcasesModule } from './pointcases/pointcases.module';
import { DBUserModule } from './dbuser/dbuser.module';
import { AuthModule } from './auth/auth.module';
import { HealthProfissionalModule } from './healthprofessional/healthprofessional.module';
import { UpdateModule } from './update/update.module';
import { NotifyModule } from './notify/notify.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    
    }),
    ScheduleModule.forRoot(),
    HttpModule,
    CountryModule,
    RegionModule,
    RecordsCountryModule,
    RecordsRegionModule,
    NotificationsModule,
    PointcasesModule,
    DBUserModule,
    AuthModule,
    UpdateModule,
    HealthProfissionalModule,
    NotifyModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
