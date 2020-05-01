import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { RecordsCountry } from '../recordscountry/recordscountry.entity';

@Entity()
export class Country {

  @PrimaryColumn('char')
  country_code: string;

  @Column('varchar')
  country_name: string;

  @Column('integer')
  confirmed: number;

  @Column('integer')
  deaths: number;

  @Column('integer')
  recovered: number;

  @Column('decimal')
  lat: number;

  @Column('decimal')
  long: number;

  @OneToMany(type => RecordsCountry, recordscountry => recordscountry.country)
  records: RecordsCountry[];
}