import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { Country } from '../country/country.entity';

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

    @ManyToOne(type => Country, country => country.records)
    country: Country;
}