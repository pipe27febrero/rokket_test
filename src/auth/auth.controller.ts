import { Controller, Post, UseGuards , Request, HttpCode, Body, BadRequestException, Get, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserCreateDto } from 'src/users/dtos/user-create.dto';
import { UserDto } from 'src/users/dtos/user.dto';
import { toUserDto } from 'src/users/helpers/mapper';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { UserBody } from './interfaces/user-body.interface';
import { LoginResponseDto } from './dtos/login-response.dto';
import { LoginDto } from './dtos/login.dto';
import { ApiCreatedResponse, ApiResponse } from '@nestjs/swagger';

@Controller()
export class AuthController {
    constructor(private readonly usersService : UsersService,
                private readonly authService : AuthService){}

    @Post('login')
    @UseGuards(AuthGuard('local'))
    @ApiResponse({ status: 200, description: 'User authenticated successfully',type: LoginResponseDto})
    @ApiResponse({ status: 401, description: 'Unauthorized.'})
    @HttpCode(200)
    async login(@Request() req,@Body() loginDto : LoginDto) : Promise<LoginResponseDto>
    {
        const userBody : UserBody = req.user
        const accessToken = this.authService.signUserJWT(userBody)
        const loginResponseDto : LoginResponseDto = {
            accessToken
        }
        return loginResponseDto
    }

    @Post('signup')
    @ApiCreatedResponse({ description: 'User registration was successfully',type: UserDto})
    @ApiResponse({ status: 400, description: 'Bad request'})
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

