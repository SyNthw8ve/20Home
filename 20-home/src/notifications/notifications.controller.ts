import { Controller, Get } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { Notifications } from './notifications.entity';

@Controller('notification')
export class NotificationsController {

  constructor(private notification_service: NotificationsService) {}

  @Get('')
  find_all(): Promise<Notifications[]> {

    return this.notification_service.findAll();
  }
}