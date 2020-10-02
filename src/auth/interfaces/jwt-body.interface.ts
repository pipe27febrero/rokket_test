export interface JWTBody {
    sub: string;
    firstName: string;
    lastName: string;
    email: string;
    iat: number;
    exp: number;
}