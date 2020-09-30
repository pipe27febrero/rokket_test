import { UserDto } from "../dtos/user.dto";
import { User } from "../schemas/user.schema";

export const toUserDto = (user: User): UserDto => {
    const { _id , firstName, lastName, email } = user
    const userDto: UserDto = {
        _id,
        firstName,
        lastName,
        email
    }
    return userDto
}

export const toUsersDto = (users : Array<User>) : Array<UserDto> => users.map(user => toUserDto(user))