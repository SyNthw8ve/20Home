import { Injectable, Logger } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { DBUser } from '../dbuser/dbuser.entity';

@Injectable()
export class NotifyService {

    private readonly logger = new Logger(NotifyService.name);

    constructor(@InjectQueue('notifications') private notify_queue: Queue) {}

    async dispatch_notifications(users: DBUser[], pointcase) {
        
        this.notify_queue.add('notify', {users: users, new_case: pointcase});
    }
}
