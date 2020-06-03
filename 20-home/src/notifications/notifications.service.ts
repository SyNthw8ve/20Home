import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notifications } from './notifications.entity';
import { Notification } from './notification.dto';

@Injectable()
export class NotificationsService {

  constructor(
    @InjectRepository(Notifications)
    private notifications_repository: Repository<Notifications>,
  ) { }

  findAll(): Promise<Notifications[]> {
    return this.notifications_repository.find();
  }

  async insert_notification(notification: Notification, username: string, point: any): Promise<Notifications> {

    const new_not : Notifications = await this.notifications_repository.save({

      notificationTime: notification.notification_time,
      notificationType: notification.notification_type,
      isRead: notification.is_read
    });

    await this.notifications_repository.createQueryBuilder()
      .relation(Notifications, "dbusers")
      .of(new_not).add({ notId: new_not.id, username: username });

    await this.notifications_repository.createQueryBuilder()
      .relation(Notifications, "pointcases")
      .of(new_not).add({ notId: new_not.id, id: point.id })

    return new_not;
  }

  async update_notification(notifications) {

    return await this.notifications_repository.save(notifications);
  }

}