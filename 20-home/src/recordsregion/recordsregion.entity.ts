import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('recordsregion')
export class RecordsRegion {

    @PrimaryColumn('varchar')
    region_name: string;

    @PrimaryColumn('timestamp without time zone')
    record_date: Date;

    @Column('integer')
    confirmed_cases: number;

    @Column('integer')
    recovered: number;

    @Column('integer')
    deaths: number;
}
