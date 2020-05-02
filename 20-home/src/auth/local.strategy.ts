import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

    constructor(private auth_service: AuthService) {
        super();
    }

    async validate(username: string, password: string, health_professional: boolean): Promise<any> {

        const user = await this.auth_service.validate_user(username, password, health_professional);

        if (!user) 
            throw new UnauthorizedException();

        return user;
    }
}