import { Controller, Post, UseGuards , Request, HttpCode, Body, BadRequestException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserCreateDto } from 'src/users/dtos/user-create.dto';
import { UserDto } from 'src/users/dtos/user.dto';
import { toUserDto } from 'src/users/helpers/mapper';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
    constructor(private readonly usersService : UsersService,
                private readonly authService : AuthService){}

    @Post('login')
    @UseGuards(AuthGuard('local'))
    @HttpCode(200)
    async login(@Request() req)
    {
        return req.user
    }

    @Post('signup')
    async singup(@Body() userCreateDto : UserCreateDto) : Promise<UserDto>
    {
       const { email , password } = userCreateDto
       const userExists = await this.usersService.findByEmail(email)

       if(userExists)
       {
           throw new BadRequestException('Email already exists')
       }

       userCreateDto.password = await this.authService.hashPassword(password)
       const userDocument = await this.usersService.create(userCreateDto)
       const userDto = toUserDto(userDocument)

       return userDto
    }
    
}

