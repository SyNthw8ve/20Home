import { Injectable } from '@nestjs/common';
import { DBUserService } from '../dbuser/dbuser.service';
import { DBUser } from '../dbuser/dbuser.entity';
import * as bcrypt from 'bcrypt';
import * as passport from 'passport';

@Injectable()
export class AuthService {
    
    constructor(private user_service: DBUserService) {}

    async validate_user(username: string, password: string, health_professional: boolean): Promise<any> {

       const user : DBUser = await this.user_service.find_one(username);

       if (user && await this.validate_password(user.password, password)) {

            const {password, ...result } = user;

            return result;
       }

       return null;
    }

    private async validate_password(hash: string, password: string): Promise<boolean> {

        return await bcrypt.compare(password, hash);
    }
}
