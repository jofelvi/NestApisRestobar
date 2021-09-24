import { Module } from '@nestjs/common';
import { MesasService } from './mesas.service';
import { MesasController } from './mesas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Mesa, MesaSchema } from './schemas/mesa.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Mesa.name, schema: MesaSchema }]),
  ],
  controllers: [MesasController],
  providers: [MesasService],
})
export class MesasModule {}
