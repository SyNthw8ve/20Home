import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { Notifications } from './notifications.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Notifications])],
  providers: [NotificationsService],
  controllers: [NotificationsController],
})
export class NotificationsModule {}