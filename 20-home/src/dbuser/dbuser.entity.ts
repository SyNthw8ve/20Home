import { Entity, Column, PrimaryColumn, ManyToMany } from 'typeorm';
import { Notifications } from '../notifications/notifications.entity';

@Entity()
export class DBUser {

    @Column('varchar')
    first_name: string;

    @Column('varchar')
    last_name: string;

    @PrimaryColumn('varchar')
    username: string;

    @Column('varchar')
    password: string;

    @Column('varchar')
    email: string;

    @Column('decimal')
    long: number;

    @Column('decimal')
    lat: number;

    @ManyToMany(type => Notifications, notifications => notifications.users)
    notifications: Notifications[];
}