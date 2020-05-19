import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, InsertResult } from 'typeorm';
import { Pointcases } from './pointcases.entity';
import { NewCaseDto } from './pointcases.dto';

@Injectable()
export class PointcasesService {

  constructor(
    @InjectRepository(Pointcases)
    private cases_repository: Repository<Pointcases>,
  ) { }

  find_all(): Promise<Pointcases[]> {

    return this.cases_repository.find();
  }

  find_date(date: Date): Promise<Pointcases[]> {

    let date_val = new Date(date).toLocaleString().split(" ")[0]
    let date_local = (date_val.split("/").reverse().join("-") + " 00:00:00").replace(',', '');

    return this.cases_repository.find({ where: { case_time: date_local } });
  }

  async insert_new_case(new_case: NewCaseDto): Promise<any> {

    try {

      let n_case = await this.cases_repository.save({
        long: new_case.long,
        lat: new_case.lat,
        caseTime: new Date().toISOString()
      })

      await this.cases_repository.createQueryBuilder()
        .relation(Pointcases, "country")
        .of(n_case)
        .add({ countryCode: new_case.countryCode, id: n_case.id })

      if (new_case.regionName) {

        await this.cases_repository.createQueryBuilder()
          .relation(Pointcases, "region")
          .of(n_case)
          .add({ regionName: new_case.regionName, id: n_case.id })
      }

      return { success: true }

    } catch (error) {

      console.log(error)

      return { success: false };
    }
  }
}
