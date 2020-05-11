import { Column, Entity, Index, OneToOne } from "typeorm";
import { DBUser } from '../dbuser/dbuser.entity';

@Entity("healthprofissional", { schema: "public" })
export class Healthprofissional {
    
    @Column("character", { name: "health_code", length: 9, primary: true })
    healthCode: string | null;

    @Column("text", { name: "institution", nullable: false })
    institution: string | null;

    @Column("enum", {
        name: "position",
        nullable: true,
        enum: ["doctor", "nurse", "other"],
    })
    position: "doctor" | "nurse" | "other";

    /* @OneToOne(type => DBUser, user => user.healthprofessional)
    user: DBUser; */
}
