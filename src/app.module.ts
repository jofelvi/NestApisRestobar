import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { StoresModule } from './stores/stores.module';
import { MesasModule } from './mesas/mesas.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:1234@schema1.kujyo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    UsersModule,
    StoresModule,
    MesasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
