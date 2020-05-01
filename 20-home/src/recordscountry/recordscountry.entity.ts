import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('recordscountry')
export class RecordsCountry {

    @PrimaryColumn('char')
    country_code: string;

    @PrimaryColumn('timestamp without time zone')
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