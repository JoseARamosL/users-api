export class CreateUserDTO {
    readonly name: string;
    readonly lastName: string;
    readonly age: number;
    readonly description: string;
    readonly email: string;
    readonly password: string;
    readonly createdAt: Date;
}