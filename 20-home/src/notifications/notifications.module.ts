import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { Notifications } from './notifications.entity';
import { DBUserModule } from '../dbuser/dbuser.module';

@Module({
  imports: [TypeOrmModule.forFeature([Notifications]), DBUserModule],
  providers: [NotificationsService],
  controllers: [NotificationsController],
})
export class NotificationsModule {}