import { Controller, Get, Param, Post, Body, Delete, Put, All } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.model';
import { async } from 'rxjs';
​
@Controller('users')
export class UsersController {
 constructor(private readonly usersService: UsersService) {}
​
@Post()
async register(
    @Body('email') userEmail: string,
    @Body('password') userPassword: string,
) {
    const generatedId = await this.usersService.registerUser(
        userEmail,
        userPassword
    );
 return { id: generatedId , email:userEmail , password:userPassword}
 }

 @Get('/All')
 async getAllUsers(){
     return this.usersService.getUsers();
 }
}