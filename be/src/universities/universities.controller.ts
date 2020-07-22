<<<<<<< HEAD
import { Controller } from '@nestjs/common';

@Controller('universities')
export class UniversitiesController {}
=======
import {Controller,Get,Param,Post,Body,Delete,Put,All} from '@nestjs/common';
import { UniversitiesService } from './universities.service';
import { Universities } from './universities.model';
import { async } from 'rxjs';
import { exists } from 'fs';

@Controller('universities')
export class UniversitiesController {
    constructor(private readonly  universitiesService:  UniversitiesService) {}

    @Post('/login')
  async login(@Body() user) {
   
    // const _user=this.universitiesService.findByemail(user.email);
 
   
    //  return _user;
  }

  //register
  @Post()
  async register(@Body() user) {
    console.log(user);
    const generatedId = await this.universitiesService.registerUser(
      user.name,
      user.facaulty,
    );
    return user;
  }

  @Get('/All')
  async getAllUsers() {
    // return this.usersService.getUsers();
  }
}

>>>>>>> 32e31d9a342dc39fa5cede0cb11ed0a37d3cc4e8
