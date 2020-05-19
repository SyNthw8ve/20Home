import { Logger } from '@nestjs/common';
import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('notifications')
export class NotifyProcessor {

    constructor() {}

    private readonly logger = new Logger();
}