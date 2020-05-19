import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notifications } from './notifications.entity';

@Injectable()
export class NotificationsService {

  constructor(
    @InjectRepository(Notifications)
    private notifications_repository: Repository<Notifications>,
  ) {}

  findAll(): Promise<Notifications[]> {
    return this.notifications_repository.find();
  }

  async create() {

    
  }
}