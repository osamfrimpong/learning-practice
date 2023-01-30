import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUserDto';
import { UpdateUserDto } from 'src/users/dtos/UpdateUserDto';
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

  @Put('edit/:id')
  async editUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    await this.userService.updateUser(id, updateUserDto);
  }

  @Delete('delete/:id')
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    await this.userService.deleteUser(id);
  }
}
