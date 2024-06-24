import { Controller, Post, Get, Param, Body, Patch, Delete, Req } from '@nestjs/common';
import { Request } from 'express';
import { UsersService } from 'src/Services/UserService/user.service';
import { CreateUserDto } from '../../Dto/create-user.dto';
import { UpdateUserDto } from '../../Dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async addUser(@Body() createUserDto: CreateUserDto, @Req() req: Request) {
    console.log(req.body);
    const user = await this.usersService.createUser(createUserDto.name, createUserDto.age, createUserDto.email);
    return user;
  }

  @Get()
  async getAllUsers(@Req() req: Request) {
    console.log(req.headers);
    const users = await this.usersService.getUsers();
    return users;
  }

  @Get(':id')
  async getUser(@Param('id') userId: string, @Req() req: Request) {
    console.log(req.params);
    const user = await this.usersService.getUser(userId);
    return user;
  }

  @Patch(':id')
  async updateUser(@Param('id') userId: string, @Body() updateUserDto: UpdateUserDto, @Req() req: Request) {
    console.log(req.body);
    const user = await this.usersService.updateUser(userId, updateUserDto.name, updateUserDto.age, updateUserDto.email);
    return user;
  }

  @Delete(':id')
  async removeUser(@Param('id') userId: string, @Req() req: Request) {
    console.log(req.params);
    const user = await this.usersService.deleteUser(userId);
    return user;
  }
}
