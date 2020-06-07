import { EventSubscriber, EntitySubscriberInterface, InsertEvent, Connection } from 'typeorm';
import { Recordscountry } from './recordscountry.entity';
import { InjectConnection } from '@nestjs/typeorm';
import { UpdateService } from '../update/update.service';

@EventSubscriber()
export class RecordsCountrySubscriber implements EntitySubscriberInterface<Recordscountry> {

    constructor(@InjectConnection() readonly connection: Connection, private update_service: UpdateService) {
        connection.subscribers.push(this);
    }

    listenTo() {

        return Recordscountry;
    }

    afterInsert(event: InsertEvent<Recordscountry>) {

        const country_code: string = event.entity.countryCode;

        this.update_service.update_models(country_code);
    }
}