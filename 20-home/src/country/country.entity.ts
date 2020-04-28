import { Entity, Column, PrimaryColumn } from 'typeorm';

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
}