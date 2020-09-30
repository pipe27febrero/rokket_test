export interface JWTBody{
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    iat: number;
    exp: number;
}