import { MiddlewareConsumer, Module } from '@nestjs/common';
import { StoresService } from './stores.service';
import { StoresController } from './stores.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Store, StoreSchema } from './schemas/store.schema';
import { CheckTokenMiddleware } from '../middleware/checkTokenMiddleware';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../auth/constants/constanst';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Store.name, schema: StoreSchema }]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [StoresController],
  providers: [StoresService],
})
export class StoresModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CheckTokenMiddleware).forRoutes('stores');
  }
}
