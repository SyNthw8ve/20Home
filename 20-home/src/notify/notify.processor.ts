import { Logger } from '@nestjs/common';
import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';
import { Notification, NotificationType } from '../notifications/notification.dto';
import { NotificationsService } from '../notifications/notifications.service';
import { NotifyGateway } from './notify.gateway';

@Processor('notifications')
export class NotifyProcessor {

    constructor(private notifications_service: NotificationsService,
        private gateway: NotifyGateway) { }

    private readonly logger = new Logger();

    @Process('notify')
    notify_users(job: Job<unknown>) {

        const job_data: any = job.data;
        const users = job_data.users;

        users.forEach(async (user) => {

            const notification: Notification = {
                notification_time: new Date().toISOString(),
                notification_type: NotificationType.PROX, is_read: false
            }

            const new_not = await this.notifications_service.insert_notification(notification);
            
            if (this.gateway.hasUser(user.username)) {

                this.gateway.emitNotification(user.username);
            }
        })
    }

    @Process('link')
    link_notifications(job: Job<unknown>) {


    }
}