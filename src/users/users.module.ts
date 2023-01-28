import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserController } from './controllers/user/user.controller';
import { UsermiddlewareMiddleware } from './middlewares/usermiddleware/usermiddleware.middleware';
import { UserService } from './services/user/user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UsermiddlewareMiddleware).forRoutes('user');
  }
}
