import { Column, Entity, Index } from "typeorm";

@Index("healthprofissional_email_key", ["email"], { unique: true })
@Index("healthprofissional_health_code_key", ["healthCode"], { unique: true })
@Index("healthprofissional_pkey", ["username"], { unique: true })
@Entity("healthprofissional", { schema: "public" })
export class Healthprofissional {
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

    @Column("character", { name: "password", nullable: true, length: 60 })
    password: string | null;

    @Column("numeric", { name: "long", nullable: true })
    long: string | null;

    @Column("numeric", { name: "lat", nullable: true })
    lat: string | null;

    @Column("character", { name: "health_code", nullable: true, length: 9 })
    healthCode: string | null;

    @Column("text", { name: "institution", nullable: true })
    institution: string | null;

    @Column("enum", {
        name: "position",
        nullable: true,
        enum: ["doctor", "nurse", "other"],
    })
    position: "doctor" | "nurse" | "other" | null;
}
