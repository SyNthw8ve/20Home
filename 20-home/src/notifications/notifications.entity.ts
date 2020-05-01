import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne } from 'typeorm';
import { DBUser } from '../dbuser/dbuser.entity';
import { PointCases } from '../pointcases/pointcases.entity';;

export enum NotificationType {

    REG="region",
    PROX="proximity"
}

@Entity()
export class Notifications {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('timestamp')
    notification_time: Date;
    
    @Column({type: 'enum', enum: NotificationType})
    notification_type: NotificationType;

    @ManyToMany(type => DBUser, dbuser => dbuser.notifications)
    users: DBUser[];

    @ManyToOne(type => PointCases, pointcases => pointcases.notifications)
    case: PointCases;
}