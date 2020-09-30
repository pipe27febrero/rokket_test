import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema'
import { Model } from 'mongoose';
import { UserCreateDto } from './dtos/user-create.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async findAll(): Promise<UserDocument[]> {
        const usersDocument : Array<UserDocument> = await this.userModel.find().exec()
        return usersDocument
    }

    async findById(id : string) : Promise<UserDocument>{
        const user = await this.userModel.findById(id).exec()
        return user
    }

    async findByEmail(email : string) : Promise<UserDocument>
    {
        const user = await this.userModel.findOne({ email })
        return user
    }

    async create(userCreateDto : UserCreateDto) : Promise<UserDocument>
    {
       const createdUser = new this.userModel(userCreateDto)
       
       try{
            await createdUser.save()
       }
       catch(err)
       {
            throw(new Error(err.toString()))
       }

       return createdUser
    }
}
