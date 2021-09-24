import { Injectable } from '@nestjs/common';
import { MesaDto } from './dto/create-mesa.dto';
import { UpdateMesaDto } from './dto/update-mesa.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Mesa, MesaDocument } from './schemas/mesa.schema';

@Injectable()
export class MesasService {
  constructor(@InjectModel(Mesa.name) private MesaModel: Model<MesaDocument>) {}

  async create(createMesaDto: MesaDto): Promise<Mesa> {
    const createdUser = await new this.MesaModel(createMesaDto);
    return createdUser.save();
  }

  async findAll() {
    return await this.MesaModel.find()
      .exec()
      .then((doc) => {
        if (doc.length < 1) {
          console.log('error', doc);
          return { mensaje: 'No Mesas creadas' };
        } else {
          return doc;
        }
      });
  }

  async findOne(id: string) {
    return await this.MesaModel.findById(id)
      .exec()
      .then((doc) => {
        if (doc === null) {
          console.log('error', doc);
          return { mensaje: 'No hay Mesas con ese Id' };
        } else {
          return doc;
        }
      });
  }

  async update(id: string, updateMesaDto: UpdateMesaDto) {
    const filter = { _id: id };
    const userUpdate = await this.MesaModel.findOneAndUpdate(
      filter,
      updateMesaDto,
      {
        new: true,
      },
    );
    return userUpdate;
  }

  async remove(id: string) {
    const filter = { _id: id };
    const userRemove = await this.MesaModel.findOneAndDelete(filter).then(
      (doc) => {
        if (doc === null) {
          console.log('error', doc);
          return { mensaje: 'No existe una Mesas con ese Id' };
        } else {
          return {
            mensaje: 'success',
            payload: `La messa Numero a sido eliminado exitosamente`,
          };
        }
      },
    );
    return userRemove;
  }
}
