import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notifications } from './notifications.entity';
import { DBUser } from '../dbuser/dbuser.entity';
import { Notification, NotificationType } from './notification.dto';

@Injectable()
export class NotificationsService {

  constructor(
    @InjectRepository(Notifications)
    private notifications_repository: Repository<Notifications>,
  ) {}

  findAll(): Promise<Notifications[]> {
    return this.notifications_repository.find();
  }

  async insert_notification(notification: Notification): Promise<Notifications> {

    return await this.notifications_repository.save({

      notificationTime: notification.notification_time,
      notificationType: notification.notification_type,
      isRead: notification.is_read
    })
  }
}