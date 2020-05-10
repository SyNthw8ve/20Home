import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PointcasesController } from './pointcases.controller';
import { PointcasesService } from './pointcases.service';
import { Pointcases } from './pointcases.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pointcases])],
  providers: [PointcasesService],
  controllers: [PointcasesController]
})
export class PointcasesModule {}
