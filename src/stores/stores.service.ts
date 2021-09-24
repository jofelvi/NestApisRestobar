import { Injectable } from '@nestjs/common';
import { StoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../users/schemas/user.schema';
import { Model } from 'mongoose';
import { Store } from './schemas/store.schema';

@Injectable()
export class StoresService {
  constructor(
    @InjectModel(Store.name) private StoreModel: Model<UserDocument>,
  ) {}

  async create(createStoreDto: StoreDto) {
    const createdUser = await new this.StoreModel(createStoreDto);
    return createdUser.save();
  }

  async findAll() {
    return await this.StoreModel.find()
      .exec()
      .then((doc) => {
        if (doc === null) {
          console.log('error', doc);
          return { mensaje: 'No hay Tiendas' };
        } else {
          return doc;
        }
      });
  }

  async findOne(id: string) {
    return await this.StoreModel.findById(id)
      .exec()
      .then((doc) => {
        if (doc === null) {
          console.log('error', doc);
          return { mensaje: 'No hay Tiendas con ese Id' };
        } else {
          return doc;
        }
      });
  }

  async update(id: string, updateStoreDto: UpdateStoreDto) {
    const filter = { _id: id };
    const userUpdate = await this.StoreModel.findOneAndUpdate(
      filter,
      updateStoreDto,
      {
        new: true,
      },
    );
    return userUpdate;
  }

  async remove(id: string) {
    const filter = { _id: id };
    const userRemove = await this.StoreModel.findOneAndDelete(filter).then(
      (doc) => {
        if (doc === null) {
          console.log('error', doc);
          return { mensaje: 'No existe una Tiendas con ese Id' };
        } else {
          return {
            mensaje: 'success',
            payload: `La tienda ${doc.name} a sido eliminada exitosamente`,
          };
        }
      },
    );
    return userRemove;
  }
}
