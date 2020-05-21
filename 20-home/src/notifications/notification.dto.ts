export enum NotificationType {

    REG='region',
    PROX='proximity',
}

export class Notification {

    notification_time: string;
    notification_type: NotificationType;
    is_read: boolean
}