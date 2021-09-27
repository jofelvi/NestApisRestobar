import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AlergenosDto } from '../dto/create-alegenos.dto';

export type IngredientDocument = Ingredient & Document;

@Schema()
export class Ingredient {
  @Prop()
  id: string;

  @Prop()
  storesID: string;

  @Prop()
  description?: string;

  @Prop()
  categoryId: string;

  @Prop()
  supplierId?: string;

  @Prop()
  formatoId: string;

  @Prop()
  presentation: string;

  @Prop()
  quantity: number;

  @Prop({ required: false })
  stockMin: number;

  @Prop()
  stockMax: number;

  @Prop()
  active: boolean;

  @Prop()
  image?: string;

  @Prop()
  alergenos?: AlergenosDto;

  @Prop()
  priceUnit: string;
}

export const IngredientSchema = SchemaFactory.createForClass(Ingredient);
