import {
  Controller,
  Post,
  Body,
  Delete,
  Param,
  Put,
  Get,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { async } from 'rxjs';
//import { CreatePostDto } from './creatPost.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}
  postID: any;
  @Post('/admin')
  async admin(@Body() university) {
    const _university = this.adminService.findOne(
      university.universityName,
      university.faculty);
    
    return _university;
  }

  @Post()
  async addPost(@Body() university) {
    console.log(university);
    const generatedId = await this.adminService.addPost(
      university.universityName,
      university.faculty,
    );
    return university;
  }
  @Get('/All')
  async getAllUniversities() {
    return this.adminService.getUniversity();
  }

  @Delete('delete/:postID')
  async Delete(@Param('postID') postID) {
     await this.adminService.delete(postID);
  }
  @Post('update')
  async Update(@Body() universityName:any){
    await this.adminService.update(universityName);
  }
}

//   @Post()
//   async addPost(
//       @Body('universityName') univer) {
//     console.log(CreatePostDto);
//     return this.adminService.createStudent(CreatePostDto);
//   }

//   @Put(':id')
//   update(
//       @Param('faculty') id: string,
//        @Body() update) {
//     return `This action updates a #${id} cat`;
//   }

//   @Get('/All')
//     async getAllCustomer(@Res() res) {
//         const _posts = await this.adminService.getAllPosts();
//         return res.status(HttpStatus.OK).json(_posts);
//     }
