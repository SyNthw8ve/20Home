import { Injectable } from '@nestjs/common';
import { DBUserService } from '../dbuser/dbuser.service';
import { HealthProfessionalService } from '../healthprofessional/healthprofessional.service';
import { JwtService } from '@nestjs/jwt';
import { DBUser } from '../dbuser/dbuser.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    
    constructor(
        private user_service: DBUserService,
        private health_service: HealthProfessionalService,
        private jwt_service: JwtService
        ) {}

    async validate_user(username: string, password: string): Promise<any> {
        
       const user : DBUser = await this.user_service.find_one(username);
       
       if (user && await this.validate_password(user.password, password)) {

            const health_info = await this.health_service.find_one(username);

            const {password, ...result } = user;

            result['healthInfo'] = health_info;

            return result;
       }

       return null;
    }

    async login(user: any) {

        const payload = user;

        return {
            access_token: this.jwt_service.sign(payload),
        };
    }

    private async validate_password(hash: string, password: string): Promise<boolean> {

        return await bcrypt.compare(password, hash);
    }
}
