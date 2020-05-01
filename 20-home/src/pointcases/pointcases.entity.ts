import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PointCases {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('decimal')
    long: number;

    @Column('decimal')
    lat: number;

    @Column('varchar')
    region_name: string;

    @Column('timestamp')
    case_time: Date;
}