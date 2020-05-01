import { Entity, Column, PrimaryColumn, ManyToMany, ManyToOne } from 'typeorm';
import { Notifications } from '../notifications/notifications.entity';
import { Region } from '../region/region.entity';

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

    @ManyToOne(type => Region, region => region.users)
    region: Region;
}