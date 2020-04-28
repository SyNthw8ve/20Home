import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class DBUser {

    @Column('varchar')
    first_name: string;

    @Column('varchar')
    last_name: string;

    @PrimaryColumn('varchar')
    username: string;

    @Column('varchar')
    email: string;

    @Column('decimal')
    long: number;

    @Column('decimal')
    lat: number;
}