import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../../Models/User/ser.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async createUser(name: string, age: number, email: string): Promise<User> {
    const newUser = new this.userModel({ name, age, email });
    return newUser.save();
  }

  async getUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async getUser(userId: string): Promise<User> {
    const user = await this.userModel.findById(userId).exec();
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    return user;
  }

  async updateUser(userId: string, name: string, age: number, email: string): Promise<User> {
    const existingUser = await this.userModel.findByIdAndUpdate(userId, { name, age, email }, { new: true }).exec();
    if (!existingUser) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    return existingUser;
  }

  async deleteUser(userId: string): Promise<User> {
    const deletedUser = await this.userModel.findByIdAndDelete(userId).exec();
    if (!deletedUser) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    return deletedUser;
  }
}
