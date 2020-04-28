import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class RecordsCountry {

    @PrimaryColumn('char')
    country_code: string;

    @PrimaryColumn('timestamp')
    record_date: Date;
    
    @Column('integer')
    recovered: number;

    @Column('integer')
    active: number;

    @Column('integer')
    deaths: number;

    @Column('integer')
    cases: number;
}