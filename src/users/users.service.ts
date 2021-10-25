import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { jwtConstants } from '../auth/constants/constanst';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}

  async create(createUserDto: UserDto) {
    const saltOrRounds = 10;
    const hashedPass = await bcrypt.hash(createUserDto.password, saltOrRounds);
    createUserDto.password = hashedPass;
    const createdUser = await new this.UserModel(createUserDto);
    return createdUser.save();
  }

  async findAll() {
    return await this.UserModel.find()
      .exec()
      .then((doc) => {
        if (doc === null) {
          console.log('error', doc);
          return { mensaje: 'No hay usuarios' };
        } else {
          return doc;
        }
      });
  }

  async findOne(id: string): Promise<any> {
    return await this.UserModel.findById(id)
      .exec()
      .then((doc) => {
        if (doc === null) {
          console.log('error', doc);
          return { mensaje: 'No hay usuario con ese Id' };
        } else {
          return doc;
        }
      });
  }

  async findByEmail(email: string): Promise<any> {
    const condition = { email: email };
    return await this.UserModel.findOne(condition)
      .exec()
      .then((doc) => {
        if (doc === null) {
          console.log('error', doc);
          return { mensaje: 'No hay usuario con ese Id' };
        } else {
          return doc;
        }
      });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const filter = { _id: id };
    const userUpdate = await this.UserModel.findOneAndUpdate(
      filter,
      updateUserDto,
      {
        new: true,
      },
    );
    return userUpdate;
  }

  async remove(id: string) {
    const filter = { _id: id };
    const userRemove = await this.UserModel.findOneAndDelete(filter).then(
      (doc) => {
        if (doc === null) {
          console.log('error', doc);
          return { mensaje: 'No existe un usuario con ese Id' };
        } else {
          return {
            mensaje: 'success',
            payload: `La usuario ${doc.name} ${doc.lastName}  a sido eliminado exitosamente`,
          };
        }
      },
    );
    return userRemove;
  }
}
