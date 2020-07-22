import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './admin/admin.module';
import { UsersModule } from  './users/users.module';

  
//connection
@Module({
  imports: [UsersModule,
    MongooseModule.forRoot('mongodb+srv://emanuelmahlangu:46636377@cluster0.mfbxs.mongodb.net/test', {
    }),
    AdminModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}