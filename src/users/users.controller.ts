import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserDto } from './dtos/user.dto';
import { toUsersDto } from './helpers/mapper';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll(): Promise<UserDto[]> {
        const users = await this.usersService.findAll()
        const usersDto = toUsersDto(users)
        return usersDto
    }
}