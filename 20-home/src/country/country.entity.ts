import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  OneToMany,
} from "typeorm";
import { Countrycases } from "../countrycases/countrycases.entity";
import { DBUser } from "../dbuser/dbuser.entity";
import { Region } from "../region/region.entity";
import { Recordscountry } from "../recordscountry/recordscountry.entity";
import { Pointcases } from '../pointcases/pointcases.entity';

@Index("country_pkey", ["countryCode"], { unique: true })
@Entity("country", { schema: "public" })
export class Country {
  @Column("character", { primary: true, name: "country_code", length: 2 })
  countryCode: string;

  @Column("character varying", {
    name: "country_name",
    nullable: true,
    length: 32,
  })
  countryName: string | null;

  @Column("integer", { name: "confirmed", nullable: true })
  confirmed: number | null;

  @Column("integer", { name: "deaths", nullable: true })
  deaths: number | null;

  @Column("integer", { name: "recovered", nullable: true })
  recovered: number | null;

  @Column("numeric", { name: "lat", nullable: true })
  lat: string | null;

  @Column("numeric", { name: "long", nullable: true })
  long: string | null;

  @OneToMany(() => Countrycases, (countrycases) => countrycases.countryCode2)
  countrycases: Countrycases[];

  @ManyToMany(() => DBUser, (dbuser) => dbuser.countries)
  @JoinTable({
    name: "fromcountry",
    joinColumns: [
      { name: "country_code", referencedColumnName: "countryCode" },
    ],
    inverseJoinColumns: [
      { name: "username", referencedColumnName: "username" },
    ],
    schema: "public",
  })
  dbusers: DBUser[];

  @ManyToMany(() => Region, (region) => region.countries)
  @JoinTable({
    name: "hasregions",
    joinColumns: [
      { name: "country_code", referencedColumnName: "countryCode" },
    ],
    inverseJoinColumns: [
      { name: "region_name", referencedColumnName: "regionName" },
    ],
    schema: "public",
  })
  regions: Region[];

  @OneToMany(
    () => Recordscountry,
    (recordscountry) => recordscountry.countryCode2
  )
  recordscountries: Recordscountry[];

  @ManyToMany(() => Pointcases, (pointcases) => pointcases.country)
  cases: Pointcases[];
}
