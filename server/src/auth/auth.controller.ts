import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Routes, Services } from '../utils/constants';
import { IAuthService } from './auth';
import { CreateUserDto } from './dto/createUser.dto';
import { IUserService } from '../users/user';
import { instanceToPlain } from 'class-transformer';

@Controller(Routes.AUTH)
export class AuthController {
  constructor(
    @Inject(Services.AUTH) private authService: IAuthService,
    @Inject(Services.USERS) private userService: IUserService,
  ) {}

  @Post('register')
  @UsePipes(ValidationPipe)
  async registerUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return instanceToPlain(await this.userService.createUser(createUserDto));
  }

  @Post('login')
  login() {}

  @Post('logout')
  logout() {}

  @Get('status')
  status() {}
}
