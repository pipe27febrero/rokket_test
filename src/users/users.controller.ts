import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserDto } from './dtos/user.dto';
import { toUsersDto } from './helpers/mapper';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('Users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Get()
    @ApiResponse({ status: 200, description: 'Users List',type: [UserDto]})
    @ApiResponse({ status: 401, description: 'Unauthorized.'})
    async findAll(): Promise<UserDto[]> {
        const users = await this.usersService.findAll()
        const usersDto = toUsersDto(users)
        return usersDto
    }
}