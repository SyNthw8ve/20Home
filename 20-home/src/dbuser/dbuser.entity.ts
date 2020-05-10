import { Column, Entity, Index, ManyToMany } from "typeorm";
import { Country } from "../country/country.entity";
import { Region } from "../region/region.entity";
import { Notifications } from "../notifications/notifications.entity";

@Index("dbuser_email_key", ["email"], { unique: true })
@Index("dbuser_pkey", ["username"], { unique: true })
@Entity("dbuser", { schema: "public" })
export class DBUser {
  @Column("character varying", {
    name: "first_name",
    nullable: true,
    length: 32,
  })
  firstName: string | null;

  @Column("character varying", {
    name: "last_name",
    nullable: true,
    length: 32,
  })
  lastName: string | null;

  @Column("character varying", { primary: true, name: "username", length: 32 })
  username: string;

  @Column("text", { name: "email", nullable: true })
  email: string | null;

  @Column("numeric", { name: "long", nullable: true })
  long: number | null;

  @Column("numeric", { name: "lat", nullable: true })
  lat: number | null;

  @Column("character", { name: "password", nullable: true, length: 60 })
  password: string | null;

  @ManyToMany(() => Country, (country) => country.dbusers)
  countries: Country[];

  @ManyToMany(() => Region, (region) => region.dbusers)
  regions: Region[];

  @ManyToMany(() => Notifications, (notifications) => notifications.dbusers)
  notifications: Notifications[];

  @ManyToMany(() => Region, (region) => region.dbusers2)
  regions2: Region[];
}
