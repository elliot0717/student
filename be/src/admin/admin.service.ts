import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {Admin} from './admin.model'

@Injectable()
export class AdminService {

    universities: any;

    constructor(@InjectModel('Admin') private readonly adminModel: Model<Admin>) { }

    
    async addPost(faculty: string,universityName: string) {
        const newPost = new this.adminModel({
            universityName,
          faculty
          
        });
    
        const result = await newPost.save();
        console.log(result);
        return result;
      }


      async getUniversity(){
          const universities = await this.adminModel.find().exec();
          return universities;
      }



  async findOne(universityName: string): Promise<Admin | undefined> {
    return this.universities.find(university => university.universityName === universityName);
  }

//   async findByemail(universityName: string): Promise<Users | undefined> {
//     return this.loginModel.findOne({email: email});
//   }











    //   async createStudent(adminObject:CreatePostDto): Promise<Admin> {
    //     // const newCustomer = await this.studentRepository.create(studentObject)
    //      const newPost = await new this.adminModel(adminObject)
    //      return newPost.save();
    //  }
    //   async updatePost(studentID,studentObject) : Promise<Admin> 
    // {
    //     const postUpdate = await this.adminModel.findByIdAndUpdate(studentID,studentObject,{ new: true });
    //     return postUpdate;
    // }

    // async deletePost(studentID)
    // {
    //     const deleted_post = await this.adminModel.findByIdAndRemove(studentID);
    //     return  deleted_post;
    // }
    // async getAllPosts(): Promise<Admin[]> {
    //     const _posts = await this.adminModel.find().exec();
    //     return _posts;
    // }

}
