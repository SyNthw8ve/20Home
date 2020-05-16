import { Column, Entity, Index, OneToOne } from "typeorm";
import { DBUser } from '../dbuser/dbuser.entity';
import { Position } from '../dbuser/dbuser.dto';

@Entity("healthprofissional", { schema: "public" })
export class Healthprofissional {
    
    @Column("character varying", {name: 'username', primary: true})
    username: string;

    @Column("character", { name: "health_code", length: 9, unique: true })
    healthCode: string | null;

    @Column("text", { name: "institution", nullable: false })
    institution: string | null;

    @Column("enum", {
        name: "position",
        nullable: true,
        enum: ["doctor", "nurse", "other"],
    })
    position: Position;
}
