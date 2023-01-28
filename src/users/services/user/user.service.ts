import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private introText = 'Hello World';

  showIntroText() {
    return this.introText;
  }
}
