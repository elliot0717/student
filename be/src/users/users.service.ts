import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from './users.model';
​
@Injectable()
export class UsersService {
   
  users: any;


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
    return result;
  }

  async getUsers(){
    const users= await this.loginModel.find().exec();
    return users;
  }

  async findOne(username: string): Promise<Users | undefined> {
    return this.users.find(user => user.username === username);
  }


  async findByemail(email: string): Promise<Users | undefined> {
    return this.loginModel.findOne({email: email});
  }


}

