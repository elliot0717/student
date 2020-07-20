import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.model';
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
 return { id: generatedId }
 }
}