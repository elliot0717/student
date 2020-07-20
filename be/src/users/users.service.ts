import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from './users.model';
​
@Injectable()
export class UsersService {
  private users: Users[] = [];
​
  constructor(@InjectModel('User') private readonly loginModel: Model<Users>) { }
​
  async registerUser(email: string, password: string) {
    const newUser = new this.loginModel({
      email,
      password
    });
    const result = await newUser.save();
    console.log(result);
    return result.email;
  }
}