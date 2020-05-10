import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToOne,
  } from "typeorm";
  import { Recordsregion } from "../recordsregion/recordsregion.entity";
  import { Region } from "../region/region.entity";
  
  @Index("regioncases_pkey", ["recordDate", "regionName"], { unique: true })
  @Entity("regioncases", { schema: "public" })
  export class Regioncases {
    @Column("timestamp without time zone", { primary: true, name: "record_date" })
    recordDate: Date;
  
    @Column("character varying", {
      primary: true,
      name: "region_name",
      length: 32,
    })
    regionName: string;
  
    @OneToOne(() => Recordsregion, (recordsregion) => recordsregion.regioncases)
    @JoinColumn([
      { name: "region_name", referencedColumnName: "regionName" },
      { name: "record_date", referencedColumnName: "recordDate" },
    ])
    recordsregion: Recordsregion;
  
    @ManyToOne(() => Region, (region) => region.regioncases)
    @JoinColumn([{ name: "region_name", referencedColumnName: "regionName" }])
    regionName2: Region;
  }
  