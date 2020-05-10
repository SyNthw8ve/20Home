import {
    Column,
    Entity,
    Index,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
  } from "typeorm";
  import { Pointcases } from "../pointcases/pointcases.entity";
  import { DBUser } from "../dbuser/dbuser.entity";
  
  @Index("notifications_pkey", ["id"], { unique: true })
  @Entity("notifications", { schema: "public" })
  export class Notifications {
    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id: number;
  
    @Column("timestamp without time zone", {
      name: "notification_time",
      nullable: true,
    })
    notificationTime: Date | null;
  
    @Column("enum", {
      name: "notification_type",
      nullable: true,
      enum: ["region", "proximity"],
    })
    notificationType: "region" | "proximity" | null;
  
    @Column("boolean", { name: "is_read", nullable: true })
    isRead: boolean | null;
  
    @ManyToMany(() => Pointcases, (pointcases) => pointcases.notifications)
    pointcases: Pointcases[];
  
    @ManyToMany(() => DBUser, (dbuser) => dbuser.notifications)
    @JoinTable({
      name: "notify",
      joinColumns: [{ name: "not_id", referencedColumnName: "id" }],
      inverseJoinColumns: [
        { name: "username", referencedColumnName: "username" },
      ],
      schema: "public",
    })
    dbusers: DBUser[];
  }
  