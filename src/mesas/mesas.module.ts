import { MiddlewareConsumer, Module } from '@nestjs/common';
import { MesasService } from './mesas.service';
import { MesasController } from './mesas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Mesa, MesaSchema } from './schemas/mesa.schema';
import { CheckTokenMiddleware } from '../middleware/checkTokenMiddleware';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../auth/constants/constanst';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Mesa.name, schema: MesaSchema }]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [MesasController],
  providers: [MesasService],
})
export class MesasModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CheckTokenMiddleware).forRoutes('mesas');
  }
}
