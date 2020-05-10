import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToOne,
  } from "typeorm";
  import { Countrycases } from "../countrycases/countrycases.entity";
  import { Country } from "../country/country.entity";
  
  @Index("recordscountry_pkey", ["countryCode", "recordDate"], { unique: true })
  @Entity("recordscountry", { schema: "public" })
  export class Recordscountry {
    @Column("character", { primary: true, name: "country_code", length: 2 })
    countryCode: string;
  
    @Column("timestamp without time zone", { primary: true, name: "record_date" })
    recordDate: Date;
  
    @Column("integer", { name: "recovered", nullable: true })
    recovered: number | null;
  
    @Column("integer", { name: "deaths", nullable: true })
    deaths: number | null;
  
    @Column("integer", { name: "cases", nullable: true })
    cases: number | null;
  
    @Column("integer", { name: "active", nullable: true })
    active: number | null;
  
    @OneToOne(() => Countrycases, (countrycases) => countrycases.recordscountry)
    countrycases: Countrycases;
  
    @ManyToOne(() => Country, (country) => country.recordscountries)
    @JoinColumn([{ name: "country_code", referencedColumnName: "countryCode" }])
    countryCode2: Country;
  }
  