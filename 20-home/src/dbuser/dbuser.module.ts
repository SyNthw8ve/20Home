import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DBUserService } from './dbuser.service';
import { DBUser } from './dbuser.entity';
import { DBUserController } from './dbuser.controller';

@Module({
    imports: [TypeOrmModule.forFeature([DBUser])],
    providers: [DBUserService],
    controllers: [DBUserController]
})
export class DBUserModule {}