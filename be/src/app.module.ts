import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from  './users/users.module';

  

@Module({
  imports: [UsersModule,
    MongooseModule.forRoot('mongodb+srv://sara:Girly@20000720@cluster0.arnb6.mongodb.net/student?retryWrites=true&w=majority', {
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}