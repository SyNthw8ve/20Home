import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Region {

    @PrimaryColumn('varchar')
    region_name: string;

    @Column('decimal')
    long: number;

    @Column('decimal')
    lat: number;

    
}