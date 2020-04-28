import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum NotificationType {

    REG="region",
    PROX="proximity"
}

@Entity()
export class Notifications {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column('timestamp')
    notification_time: Date;
    
    @Column({type: 'enum', enum: NotificationType})
    notification_type: NotificationType;
}