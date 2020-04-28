import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PointCases {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column('decimal')
    long: number;

    @Column('decimal')
    lat: number;

    @Column('varchar')
    region_name: number;

    @Column('timestamp')
    case_time: Date;
}