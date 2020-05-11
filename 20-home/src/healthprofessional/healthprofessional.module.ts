import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthProfessionalService } from './healthprofessional.service';
import { Healthprofissional } from './healthprofessional.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Healthprofissional])],
    providers: [HealthProfessionalService],
    exports: [HealthProfessionalService]
})
export class HealthProfissionalModule {}