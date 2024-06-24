import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from '../../Controllers/UserController/user.controller';
import { UsersService } from '../../Services/UserService/user.service';
import { UserSchema } from '../../Models/User/ser.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
