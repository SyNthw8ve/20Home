import { Injectable } from '@nestjs/common';
import { DBUserService } from '../dbuser/dbuser.service';
import { JwtService } from '@nestjs/jwt';
import { DBUser } from '../dbuser/dbuser.entity';
import * as bcrypt from 'bcrypt';
import * as passport from 'passport';

@Injectable()
export class AuthService {
    
    constructor(
        private user_service: DBUserService,
        private jwt_service: JwtService
        ) {}

    async validate_user(username: string, password: string, health_professional: boolean): Promise<any> {

       const user : DBUser = await this.user_service.find_one(username);

       if (user && await this.validate_password(user.password, password)) {

            const {password, ...result } = user;

            return result;
       }

       return null;
    }

    async login(user: any) {

        const payload = {username: user.username};

        return {
            access_token: this.jwt_service.sign(payload)
        };
    }

    private async validate_password(hash: string, password: string): Promise<boolean> {

        return await bcrypt.compare(password, hash);
    }
}
