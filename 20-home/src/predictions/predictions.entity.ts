import {
    Column,
    Entity,
    Index,
} from "typeorm";

@Index("predictions_pkey", ["countryCode", "predictionDate"], { unique: true })
@Entity("predictions", { schema: "public" })
export class Predictions {

    @Column("character", { primary: true, name: "country_code", length: 2 })
    countryCode: string;

    @Column("numeric", { name: "prediction_value", nullable: true })
    predictionValue: number | null;
  
    @Column("timestamp without time zone", {primary: true, name: "prediction_date"})
    predictionDate: Date | null;
}