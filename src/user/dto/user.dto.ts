// Definición de la clase CreateUserDTO
export class CreateUserDTO {

    // Los siguientes campos son declarados como 'readonly', lo que significa
    // que solo pueden ser establecidos una vez, generalmente en el momento de
    // la creación del objeto.
    
    readonly name: string;
    readonly lastName: string;
    readonly age: number;
    readonly description: string;
    readonly email: string;
    readonly password: string;
    readonly createdAt: Date;
}