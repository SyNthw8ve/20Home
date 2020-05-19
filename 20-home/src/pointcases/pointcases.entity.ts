import {
    Column,
    Entity,
    Index,
    JoinTable,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from "typeorm";
  import { Symptom } from "../symptom/symptom.entity";
  import { Notifications } from "../notifications/notifications.entity";
  import { Country } from '../country/country.entity';
  import { Region } from '../region/region.entity';
  
  @Index("pointcases_pkey", ["id"], { unique: true })
  @Entity("pointcases", { schema: "public" })
  export class Pointcases {
    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id: number;
  
    @Column("numeric", { name: "long", nullable: true })
    long: number | null;
  
    @Column("numeric", { name: "lat", nullable: true })
    lat: number | null;
  
    @Column("timestamp without time zone", { name: "case_time", nullable: true })
    caseTime: Date | null;
  
    @ManyToMany(() => Symptom, (symptom) => symptom.pointcases)
    @JoinTable({
      name: "hassymptoms",
      joinColumns: [{ name: "case_id", referencedColumnName: "id" }],
      inverseJoinColumns: [
        { name: "symptom_name", referencedColumnName: "symptomName" },
      ],
      schema: "public",
    })
    symptoms: Symptom[];
  
    @ManyToMany(() => Notifications, (notifications) => notifications.pointcases)
    @JoinTable({
      name: "newcase",
      joinColumns: [{ name: "case_id", referencedColumnName: "id" }],
      inverseJoinColumns: [{ name: "not_id", referencedColumnName: "id" }],
      schema: "public",
    })
    notifications: Notifications[];

    @ManyToMany(() => Country, (country) => country.cases)
    @JoinTable({
      name: "incountry",
      joinColumns: [{name: "id", referencedColumnName: "id"}],
      inverseJoinColumns: [{ name: "country_code", referencedColumnName: "countryCode"}]
    })
    country: Country;

    @ManyToMany(() => Region, (region) => region.cases)
    @JoinTable({
      name: "inregion",
      joinColumns: [{name: "id", referencedColumnName: "id"}],
      inverseJoinColumns: [{ name: "region_name", referencedColumnName: "regionName"}]
    })
    region: Region;
  }
  