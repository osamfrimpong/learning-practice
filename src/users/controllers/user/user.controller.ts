import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUserDto';
import { UserService } from 'src/users/services/user/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('index')
  showHome() {
    return this.userService.showIntroText();
  }

  @Get('all_users')
  async getAllUsers() {
    const users = await this.userService.findUsers();
    return users;
  }

  @Post('create_user')
  createUser(@Body() createUserDto: CreateUserDto) {
    // console.log(`UserDTO ${createUserDto.username}`);
    return this.userService.createUser(createUserDto);
  }
}
