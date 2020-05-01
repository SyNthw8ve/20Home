import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { Region } from '../region/region.entity';

export enum Position {

    DOC="doctor",
    NUR="nurse",
    OTHER="other"
}

@Entity()
export class HealthProfessional {

    @Column('varchar')
    first_name: string;

    @Column('varchar')
    last_name: string;

    @PrimaryColumn('varchar')
    username: string;

    @Column('varchar')
    password: string;

    @Column('varchar')
    email: string;

    @Column('decimal')
    long: number;

    @Column('decimal')
    lat: number;

    @Column('char')
    health_code: string;

    @Column('text')
    institution: string;

    @Column({type: 'enum', enum: Position})
    position: Position;

    @ManyToOne(type => Region, region => region.health_professionals)
    region: Region;
}