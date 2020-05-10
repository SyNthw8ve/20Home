import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToOne,
  } from "typeorm";
  import { Country } from "../country/country.entity";
  import { Recordscountry } from "../recordscountry/recordscountry.entity";
  
  @Index("countrycases_pkey", ["countryCode", "recordDate"], { unique: true })
  @Entity("countrycases", { schema: "public" })
  export class Countrycases {
    @Column("timestamp without time zone", { primary: true, name: "record_date" })
    recordDate: Date;
  
    @Column("character", { primary: true, name: "country_code", length: 2 })
    countryCode: string;
  
    @ManyToOne(() => Country, (country) => country.countrycases)
    @JoinColumn([{ name: "country_code", referencedColumnName: "countryCode" }])
    countryCode2: Country;
  
    @OneToOne(
      () => Recordscountry,
      (recordscountry) => recordscountry.countrycases
    )
    @JoinColumn([
      { name: "country_code", referencedColumnName: "countryCode" },
      { name: "record_date", referencedColumnName: "recordDate" },
    ])
    recordscountry: Recordscountry;
  }
  