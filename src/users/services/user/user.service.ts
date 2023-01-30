import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { CreateUserParams, UpdateUserParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  private introText = 'Hello World';

  showIntroText() {
    return this.introText;
  }

  findUsers() {
    return this.userRepository.find();
  }

  createUser(userDetails: CreateUserParams) {
    console.log(`User Details ${userDetails}`);
    const newUser = this.userRepository.create({
      username: userDetails.username,
      password: userDetails.password,
      createdAt: new Date(),
    });
    return this.userRepository.save(newUser);
  }

  updateUser(id: number, updateDetails: UpdateUserParams) {
    return this.userRepository.update({ id }, { ...updateDetails });
  }

  deleteUser(id: number) {
    return this.userRepository.delete({ id });
  }
}
