import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from  './users/users.module';

  
//connection
@Module({
  imports: [UsersModule,
    MongooseModule.forRoot('mongodb://localhost:27017/student', {
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}