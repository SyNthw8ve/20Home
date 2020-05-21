import { Controller, Get, Put, Body } from '@nestjs/common';
import { NotificationsService } from './notifications.service';

@Controller('notification')
export class NotificationsController {

  constructor(private notification_service: NotificationsService) {}

  @Put('update')
  update_notification(@Body() notifications) {

    return this.notification_service.update_notification(notifications);
  }
 
}