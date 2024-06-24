import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './Modules/UserModules/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nestjs-crud'),
    UsersModule,
  ],
})
export class AppModule {}
