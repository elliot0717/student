import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './admin/admin.module';
import { UniversitiesModule } from './universities/universities.module';
import { UsersModule } from  './users/users.module';

  
//connection
@Module({
  imports: [UsersModule,
<<<<<<< HEAD
    MongooseModule.forRoot('mongodb://localhost:27017/student', {
    }),],
=======
    MongooseModule.forRoot('mongodb+srv://sara:Girly@20000720@cluster0.arnb6.mongodb.net/student?retryWrites=true&w=majority', {
    }),
    AdminModule,
    UniversitiesModule,],
>>>>>>> 32e31d9a342dc39fa5cede0cb11ed0a37d3cc4e8
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}