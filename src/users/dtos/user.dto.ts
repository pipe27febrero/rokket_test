import { ApiProperty } from "@nestjs/swagger";

export class UserDto{
    @ApiProperty()
    _id: string;
    @ApiProperty()
    email : string;
    @ApiProperty()
    firstName: string;
    @ApiProperty()
    lastName: string;
    @ApiProperty({required : false})
    phones?: string[];
}