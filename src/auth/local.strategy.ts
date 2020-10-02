import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';
import { validateOrReject } from "class-validator";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField : 'email'})
  }

  async validate(email: string, password: string): Promise<any> {
    const loginDto = new LoginDto()
    loginDto.email = email
    loginDto.password = password

    try{
       await validateOrReject(loginDto)
    }
    catch(errors)
    {
        const messages = errors.reduce((messages,error) => {
                const keys = Object.keys(error.constraints)
                const messagesByField = keys.map(key => error.constraints[key])
                messages = [...messages,...messagesByField]
                return messages
        },[])
        throw new BadRequestException(messages)
    }

    const userDto = await this.authService.validateUser(loginDto)

    if (!userDto) {
      throw new UnauthorizedException();
    }
    return userDto;
  }
}