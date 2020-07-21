import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
  All,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.model';
import { async } from 'rxjs';
import { exists } from 'fs';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  // @Post()
  // async login(
  //     @Body() user

  // ){
  //     async addCustomer(@Res() res, @Body() createStudentDto: studentDto) {
  //     const student = await this.studentService.createStudent(createStudentDto);
  //     return res.status(HttpStatus.OK).json({
  //         message: "Customer has been created successfully",
  //         student
  //     })

  @Post('/login')
  async login(@Body() user) {
   
    const _user=this.usersService.findByemail(user.email);
    // _user.then(value=>{
       
    //     if (value) {

    //         return_value=value;
    //         console.log('exists')
    //     }else{
            
    //         console.log('does not exists')
    //     }
    // })
   
     return _user;
  }

  //register
  @Post()
  async register(@Body() user) {
    console.log(user);
    const generatedId = await this.usersService.registerUser(
      user.email,
      user.password,
    );
    return user;
  }

  @Get('/All')
  async getAllUsers() {
    return this.usersService.getUsers();
  }
}
