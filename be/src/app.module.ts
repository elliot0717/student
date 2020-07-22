import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './admin/admin.module';
import { UsersModule } from  './users/users.module';

  
//connection
@Module({
  imports: [UsersModule,
    MongooseModule.forRoot('mongodb+srv://elliot96:Madimetsa@.96@cluster0.vthml.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    }),
    AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}