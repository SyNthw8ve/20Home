import { Entity, Column, PrimaryColumn, ManyToMany } from 'typeorm';
import { PointCases } from '../pointcases/pointcases.entity';

@Entity()
export class Symptom {

    @PrimaryColumn('text')
    symptom_name: string;

    @Column('decimal')
    percentage: number;

    @ManyToMany(type => PointCases, pointcases => pointcases.symptoms)
    cases: PointCases[];
}