import {
    Column,
    Entity,
    Index,
    JoinTable,
    ManyToMany,
    OneToMany,
  } from "typeorm";
  import { Country } from "../country/country.entity";
  import { DBUser } from "../dbuser/dbuser.entity";
  import { Recordsregion } from "../recordsregion/recordsregion.entity";
  import { Regioncases } from "../regioncases/regioncases.entity";
  import { Pointcases } from "../pointcases/pointcases.entity";
  
  @Index("region_pkey", ["regionName"], { unique: true })
  @Entity("region", { schema: "public" })
  export class Region {
    @Column("character varying", {
      primary: true,
      name: "region_name",
      length: 32,
    })
    regionName: string;
  
    @Column("numeric", { name: "long", nullable: true })
    long: string | null;
  
    @Column("numeric", { name: "lat", nullable: true })
    lat: string | null;
  
    @ManyToMany(() => Country, (country) => country.regions)
    countries: Country[];
  
    @ManyToMany(() => DBUser, (dbuser) => dbuser.regions)
    @JoinTable({
      name: "livesin",
      joinColumns: [{ name: "region_name", referencedColumnName: "regionName" }],
      inverseJoinColumns: [
        { name: "username", referencedColumnName: "username" },
      ],
      schema: "public",
    })
    dbusers: DBUser[];
  
    @ManyToMany(() => Recordsregion, (recordsregion) => recordsregion.regionName2)
    recordsregions: Recordsregion[];
  
    @OneToMany(() => Regioncases, (regioncases) => regioncases.regionName2)
    regioncases: Regioncases[];
  
    @ManyToMany(() => DBUser, (dbuser) => dbuser.regions2)
    @JoinTable({
      name: "worksin",
      joinColumns: [{ name: "region_name", referencedColumnName: "regionName" }],
      inverseJoinColumns: [
        { name: "username", referencedColumnName: "username" },
      ],
      schema: "public",
    })
    dbusers2: DBUser[];

    @ManyToMany(() => Pointcases, (pointcases) => pointcases.region)
    cases: Pointcases[];
  }
  