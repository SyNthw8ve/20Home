import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { Region } from '../region/region.entity';

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

    @ManyToOne(type => Region, region => region.records)
    region: Region;
}
