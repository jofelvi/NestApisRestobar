import { Injectable } from '@nestjs/common';
import { IngredientsDto } from './dto/create-ingredient.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ingredient, IngredientDocument } from './schemas/ingredint.schema';
import { UpdateIngredientDto } from './dto/update-ingredients.dto';

@Injectable()
export class IngredientsService {
  constructor(
    @InjectModel(Ingredient.name)
    private IngredientsModel: Model<IngredientDocument>,
  ) {}

  async create(createIngrentDto: IngredientsDto) {
    const createdIngredient = new this.IngredientsModel(createIngrentDto);
    return createdIngredient.save();
  }
  async findAll(): Promise<any> {
    const ingredients = await this.IngredientsModel.find()
      .then((doc) => {
        console.log(doc);
        if (doc.length < 1) {
          console.log('error', doc);
          return { mensaje: 'No ingredients creados' };
        } else {
          return doc;
        }
      })
      .catch((e) => {
        console.log('error', e);
      });

    return ingredients;
  }

  async findOne(id: string) {
    return await this.IngredientsModel.findById(id)
      .exec()
      .then((doc) => {
        if (doc === null) {
          console.log('error', doc);
          return { mensaje: 'No hay Ingrediente con ese Id' };
        } else {
          return doc;
        }
      });
  }

  async update(id: string, updateIngredientDto: UpdateIngredientDto) {
    const filter = { _id: id };
    const ingredientUpdate = await this.IngredientsModel.findOneAndUpdate(
      filter,
      updateIngredientDto,
      {
        new: true,
      },
    );
    return ingredientUpdate;
  }

  async remove(id: string) {
    const filter = { _id: id };
    const ingredientRemove = await this.IngredientsModel.findOneAndDelete(
      filter,
    ).then((doc) => {
      if (doc === null) {
        console.log('error', doc);
        return { mensaje: 'No existe un Ingrediente con ese Id' };
      } else {
        return {
          mensaje: 'success',
          payload: `EL Ingrediente Numero a sido eliminado exitosamente`,
        };
      }
    });
    return ingredientRemove;
  }
}
