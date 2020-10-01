import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { JWTBody } from './interfaces/jwt-body.interface';
import { ConfigService } from '@nestjs/config/dist/config.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get<string>('JWT_SECRET'),
        })
    }

    validate(payload: any): JWTBody {
        const { _id, iat, exp, firstName, lastName, email } = payload
        const jwtBody: JWTBody = {
            sub: _id,
            firstName,
            lastName,
            iat,
            exp,
            email
        }
        return jwtBody
    }
}