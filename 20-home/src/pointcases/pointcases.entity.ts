import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Symptom } from '../symptom/symptom.entity';

@Entity()
export class PointCases {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('decimal')
    long: number;

    @Column('decimal')
    lat: number;

    @Column('varchar')
    region_name: string;

    @Column('timestamp')
    case_time: Date;

    @ManyToMany(type => Symptom, symptom => symptom.cases)
    symptoms: Symptom[];
}