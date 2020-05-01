import { Entity, Column, PrimaryColumn, OneToMany, ManyToOne } from 'typeorm';
import { DBUser } from '../dbuser/dbuser.entity';
import { HealthProfessional } from '../healthprofessional/healthprofessional.entity';
import { RecordsRegion } from '../recordsregion/recordsregion.entity';
import { Country } from '../country/country.entity';

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

    @OneToMany(type => HealthProfessional, healthprofessional => healthprofessional.region)
    health_professionals: HealthProfessional[];

    @OneToMany(type => RecordsRegion, records_region => records_region.region)
    records: RecordsRegion[];

    @ManyToOne(type => Country, country => country.regions)
    country: Country;
}