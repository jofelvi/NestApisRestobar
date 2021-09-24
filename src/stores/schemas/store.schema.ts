import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type StoreDocument = Store & Document;

@Schema()
export class Store {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  owner: string;

  @Prop()
  userId?: string;
}

export const StoreSchema = SchemaFactory.createForClass(Store);
