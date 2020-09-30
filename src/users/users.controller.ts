import { Controller, Get } from '@nestjs/common';
import { UserDto } from './dtos/user.dto';
import { toUserDto, toUsersDto } from './helpers/mapper';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    async findAll(): Promise<UserDto[]> {
        const users = await this.usersService.findAll()
        const usersDto = toUsersDto(users)
        return usersDto
    }
}
