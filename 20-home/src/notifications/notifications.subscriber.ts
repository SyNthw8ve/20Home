import { EventSubscriber, EntitySubscriberInterface, InsertEvent } from 'typeorm';
import { Pointcases } from '../pointcases/pointcases.entity';
import { DBUser } from '../dbuser/dbuser.entity';

const R: number = 6371; //km
const d: number = 1000; //km

@EventSubscriber()
export class NotificationsSubscriber implements EntitySubscriberInterface<Pointcases> {

    listenTo() {

        return Pointcases;
    }

    async afterInsert(event: InsertEvent<Pointcases>) {

        const a = Math.sin(event.entity.lat);
        const b = Math.cos(event.entity.lat);
        const c = event.entity.long;

        const users = await event.manager.createQueryBuilder()
            .select("dbuser")
            .from(DBUser, "dbuser")
            .where("acos(:a*sin(dbuser.lat) + :b*cos(dbuser.lat)*cos(abs(:c - dbuser.long)))*:r <= :d", {a: a, b: b, r: R, d: d, c: c})
            .getMany();

        console.log(users);
    }
}