import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToOne,
  } from "typeorm";
  import { Region } from "../region/region.entity";
  import { Regioncases } from "../regioncases/regioncases.entity";
  
  @Index("recordsregion_pkey", ["recordDate", "regionName"], { unique: true })
  @Entity("recordsregion", { schema: "public" })
  export class Recordsregion {
    @Column("character varying", {
      primary: true,
      name: "region_name",
      length: 32,
    })
    regionName: string;
  
    @Column("timestamp without time zone", { primary: true, name: "record_date" })
    recordDate: Date;
  
    @Column("integer", { name: "confirmed", nullable: true })
    confirmed: number | null;
  
    @Column("integer", { name: "recovered", nullable: true })
    recovered: number | null;
  
    @Column("integer", { name: "deaths", nullable: true })
    deaths: number | null;
  
    @ManyToOne(() => Region, (region) => region.recordsregions)
    @JoinColumn([{ name: "region_name", referencedColumnName: "regionName" }])
    regionName2: Region;
  
    @OneToOne(() => Regioncases, (regioncases) => regioncases.recordsregion)
    regioncases: Regioncases;
  }
  