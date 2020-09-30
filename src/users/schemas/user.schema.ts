import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    _id: string;
    @Prop()
    email: string;
    @Prop()
    firstName: string;
    @Prop()
    lastName: string;
    @Prop()
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User)