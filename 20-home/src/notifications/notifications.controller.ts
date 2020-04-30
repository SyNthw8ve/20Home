import { Controller, Get } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { Notifications } from './notifications.entity';

@Controller('notification')
export class NotificationsController {

  constructor(private notification_service: NotificationsService) {}

  @Get('')
  async findAll(): Promise<Notifications[]> {

    let result = await this.notification_service.findAll();

    return result;
  }
}