import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Universities} from './universities.model';

@Injectable()
export class UniversitiesService {
    universities: any;

  constructor(@InjectModel('User') private readonly loginModel: Model<Universities>) { }
​

  async registerUser(name:string, facaulty: string) {
    const newUser = new this.loginModel({
      name,
      facaulty
    });

    const result = await newUser.save();
    console.log(result);
    return result;
  }

  async getUsers(){
    const users= await this.loginModel.find().exec();
    return universities;
  }

  async findOne(username: string): Promise<Universities | undefined> {
    return this.universities.find(university => university.name === name);
  }


  async findByemail(email: string): Promise<Universities | undefined> {
    return this.universityModel.findOne({name: name});
  }


}
