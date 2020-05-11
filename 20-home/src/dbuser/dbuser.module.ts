import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DBUserService } from './dbuser.service';
import { DBUser } from './dbuser.entity';
import { DBUserController } from './dbuser.controller';

import { HealthProfissionalModule } from '../healthprofessional/healthprofessional.module';

@Module({
    imports: [TypeOrmModule.forFeature([DBUser]), HealthProfissionalModule],
    providers: [DBUserService],
    exports: [DBUserService],
    controllers: [DBUserController]
})
export class DBUserModule {}