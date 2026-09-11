import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  Body,
  ParseIntPipe,
} from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { PositiveIntPipe } from './pipes/positive-int/positive-int.pipe';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(): string[] {
    return ['MOHIT', 'RAJ', 'KUMAR'];
  }

  @Get('search')
  searchUsers(@Query('name') name: string) {
    return `This action searches for users with name: ${name}`;
  }

  @Get('filter')
  filterUsers(@Query('role') role: string, @Query('age') age: string) {
    return `This action filters users with role: ${role} and age: ${age}`;
  }

  // @Get(':id')
  // getUser(@Param('id', ParseIntPipe) id: number) {
  //   return `This action returns user with ID: ${id} ,(${typeof id})`;
  // }

  @Get(':id')
  getUser(@Param('id', PositiveIntPipe) id: number) {
    return `This action returns user with ID: ${id} ,(${typeof id})`;
  }

  @Post()
  createUser(@Body() body: CreateUserDto) {
    return {
      message: 'User created successfully',
      user: body,
    };
  }
}
