import { UserDto } from "../dtos/user.dto";
import { UserDocument } from "../schemas/user.schema";

export const toUserDto = (userDocument: UserDocument): UserDto => {
    if(!userDocument) return null
    const { _id , firstName, lastName, email , phones } = userDocument
    const userDto: UserDto = {
        _id,
        firstName,
        lastName,
        email,
        phones
    }
    return userDto
}

export const toUsersDto = (usersDocument : Array<UserDocument>) : Array<UserDto> => usersDocument.map(userDocument => toUserDto(userDocument))