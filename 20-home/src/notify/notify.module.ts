import { Module, forwardRef } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { NotifyService } from './notify.service';
import { NotifyProcessor } from './notify.processor';
import { NotificationsModule } from '../notifications/notifications.module'
import { NotifyGateway } from './notify.gateway';

@Module({
    imports: [BullModule.registerQueue({
        name: 'notifications',
        redis: {
          host: 'redis',
          port: 6379,
        }
      }), forwardRef(() => NotificationsModule)],
    providers: [NotifyService, NotifyProcessor, NotifyGateway],
    exports: [NotifyService, NotifyProcessor, NotifyGateway]
})
export class NotifyModule {}
