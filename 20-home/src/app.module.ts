import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CountryModule } from './country/country.module';
import { RecordsCountryModule } from './recordscountry/recordscountry.module';

@Module({
  imports: [
            TypeOrmModule.forRoot(), 
            CountryModule,
            RecordsCountryModule
          ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
