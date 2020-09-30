import { Injectable } from '@nestjs/common';
import { toUserDto } from 'src/users/helpers/mapper';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    constructor(private readonly usersService : UsersService){}
    async validateUser(email: string, password: string)
    {
        const userDocument = await this.usersService.findByEmail(email)
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
}
