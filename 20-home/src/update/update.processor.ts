import { Logger } from '@nestjs/common';
import { Processor, Process, OnQueueActive } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('update_records')
export class UpdateProcessor {

    private readonly logger = new Logger(UpdateProcessor.name);

    @Process('country')
    async update(job: Job<unknown>) {

        this.logger.debug(job.data);
    }
}