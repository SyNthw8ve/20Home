import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { DBUser } from '../dbuser/dbuser.entity';

@Entity()
export class Region {

    @PrimaryColumn('varchar')
    region_name: string;

    @Column('decimal')
    long: number;

    @Column('decimal')
    lat: number;

    @OneToMany(type => DBUser, dbuser => dbuser.region)
    users: DBUser[];
}