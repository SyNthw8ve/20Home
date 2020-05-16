export enum Position {

    DOCTOR='doctor',
    NURSE='nurse',
    OTHER='other'
}

export class User {

    username: string;
    email: string; 
    password: string;
    first_name: string;
    last_name: string;
    long: number;
    lat: number;
    country_code: string;
    region_name: string;
    health_professional: boolean;
    institution: string;
    health_code: string;
    position: Position
}