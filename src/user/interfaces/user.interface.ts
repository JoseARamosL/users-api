import { Document } from 'mongoose';

// Declaración de la interfaz 'User', que extiende la interfaz 'Document'
export interface User extends Document {

    // Los siguientes campos son declarados como 'readonly', lo que significa
    // que no deben ser modificados una vez que se establezcan.
    readonly name: string;
    readonly lastName: string;
    readonly age: number;
    readonly description: string;
    readonly email: string;
    readonly password: string;
    readonly createdAt: Date;
}