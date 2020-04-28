import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Symptom {

    @PrimaryColumn('text')
    symptom_name: string;

    @Column('decimal')
    percentage: number;
}