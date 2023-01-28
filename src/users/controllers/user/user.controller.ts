import { Controller, Get } from '@nestjs/common';
import { response } from 'express';
import { UserService } from 'src/users/services/user/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('index')
  showHome() {
    return this.userService.showIntroText();
  }
}
