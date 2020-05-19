import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { NotifyService } from './notify.service';
import { NotifyProcessor } from './notify.processor';

@Module({
    imports: [BullModule.registerQueue({
        name: 'notifications'
      }),],
    providers: [NotifyService, NotifyProcessor],
    exports: [NotifyService]
})
export class NotifyModule {}
