import { Injectable } from '@nestjs/common';
import { toUserDto } from 'src/users/helpers/mapper';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt'
import { UserBody } from './interfaces/user-body.interface';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dtos/login.dto';

@Injectable()
export class AuthService {
    constructor(private readonly usersService : UsersService,
                private readonly jwtService : JwtService){}

    async validateUser(loginDto: LoginDto)
    {
        const { email , password } = loginDto
        const userDocument = await this.usersService.findByEmail(email)
        if(!userDocument) return null
        const { password : hashedPassword } = userDocument
        const passwordValid = await this.validateHash(password,hashedPassword)
        return userDocument && passwordValid ? toUserDto(userDocument) : null
    }

    async hashPassword(password : string) : Promise<string>
    {
        const passwordHashed = await bcrypt.hash(password, 10)
        return passwordHashed
    }

    async validateHash(word: string,hashedWord : string) : Promise<boolean>
    {
       return await bcrypt.compare(word, hashedWord)
    }

    signUserJWT(userBody : UserBody) : string
    {    
        const accessToken  = this.jwtService.sign(userBody)
        return accessToken
    }
}
