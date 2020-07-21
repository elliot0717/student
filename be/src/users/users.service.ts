// import { Injectable } from '@nestjs/common';

// export type User = any;

// @Injectable()
// export class UsersService {
//   private readonly users: User[];

//   constructor() {
//     this.users = [
//       {
//         userId: 1,
//         username: 'john',
//         password: 'changeme',
//       },
//       {
//         userId: 2,
//         username: 'chris',
//         password: 'secret',
//       },
//       {
//         userId: 3,
//         username: 'maria',
//         password: 'guess',
//       },
//     ];
//   }

//   async findOne(username: string): Promise<User | undefined> {
//     return this.users.find(user => user.username === username);
//   }
// }

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


  async findOne(username: string): Promise<Users | undefined> {
    return this.users.find(user => user.username === username);
  }
}