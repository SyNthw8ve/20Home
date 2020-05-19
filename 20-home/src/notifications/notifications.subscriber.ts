import { EventSubscriber, EntitySubscriberInterface, InsertEvent } from 'typeorm';
import { Pointcases } from '../pointcases/pointcases.entity';

@EventSubscriber()
export class NotificationsSubscriber implements EntitySubscriberInterface<Pointcases> {

    listenTo() {

        return Pointcases;
    }

    afterInsert(event: InsertEvent<Pointcases>) {

        console.log(event.entity);
    }
}