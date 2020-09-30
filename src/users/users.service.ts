import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDto } from './dtos/user.dto';
import { User, UserDocument } from './schemas/user.schema'
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async findAll(): Promise<Array<User>> {
        const users: Array<User> = await this.userModel.find().exec()
        return users
    }
}
