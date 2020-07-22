import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Admin } from './admin.model';

@Injectable()
export class AdminService {
  universities: any;

  constructor(
    @InjectModel('Admin') private readonly adminModel: Model<Admin>,
  ) {}

  async addPost(universityName: string, faculty: string) {
    const newPost = new this.adminModel({
      universityName,
      faculty,
    });

    const result = await newPost.save();
    console.log(result);
    return result;
  }

  async getUniversity() {
    const universities = await this.adminModel.find().exec();
    return universities;
  }

  async findOne(universityName: string, faculty: string): Promise<Admin | undefined> {
    return this.universities.find(
      university => university.universityName === universityName,
    );
  }
  async delete(postID) {
     await this.adminModel.deleteOne({_id :postID});
    
  }
  async update(post){
    await this.adminModel.updateOne({universityName:post.universityName},post);
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

  // async getAllPosts(): Promise<Admin[]> {
  //     const _posts = await this.adminModel.find().exec();
  //     return _posts;
  // }
}
