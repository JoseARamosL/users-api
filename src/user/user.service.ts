import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface'
import { CreateUserDTO } from './dto/user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

    //Métodos para realizar las acciones de los usuarios

    async getUsers(): Promise<User[]> {
        return await this.userModel.find();
    }

    async getUser(userId: string): Promise<User> {
        return await this.userModel.findById(userId);
    }

    async createUser(createUserDTO: CreateUserDTO): Promise<User> {
        const user = new this.userModel(createUserDTO);
        return await user.save();
    }

    async deleteUser(userId: string): Promise<User> {
        return await this.userModel.findByIdAndDelete(userId);
    }

    async updateUser(userId: string, createUserDTO: CreateUserDTO): Promise<User>{
        return await this.userModel.findByIdAndUpdate(userId, createUserDTO, { new: true});
    }
}
