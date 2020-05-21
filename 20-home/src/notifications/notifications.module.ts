import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { Notifications } from './notifications.entity';
import { NotificationsSubscriber } from './notifications.subscriber';
import { DBUserModule } from '../dbuser/dbuser.module';
import { NotifyModule } from '../notify/notify.module';

@Module({
  imports: [TypeOrmModule.forFeature([Notifications]), DBUserModule, forwardRef(() =>NotifyModule)],
  providers: [NotificationsService, NotificationsSubscriber],
  controllers: [NotificationsController],
  exports: [NotificationsService]
})
export class NotificationsModule { }