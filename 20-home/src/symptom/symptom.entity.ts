import { Column, Entity, Index, ManyToMany } from "typeorm";
import { Pointcases } from "../pointcases/pointcases.entity";

@Index("symptom_pkey", ["symptomName"], { unique: true })
@Entity("symptom", { schema: "public" })
export class Symptom {
  @Column("text", { primary: true, name: "symptom_name" })
  symptomName: string;

  @Column("numeric", { name: "percentage", nullable: true })
  percentage: string | null;

  @ManyToMany(() => Pointcases, (pointcases) => pointcases.symptoms)
  pointcases: Pointcases[];
}
