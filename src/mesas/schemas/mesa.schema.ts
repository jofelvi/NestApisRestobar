import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type MesaDocument = Mesa & Document;

@Schema()
export class Mesa {
  @Prop()
  id: string;

  @Prop()
  sector: string;

  @Prop()
  comenzales: number;

  @Prop()
  storesID: string;

  @Prop()
  numberTable: number;

  @Prop()
  active: boolean;

  @Prop()
  timeFrom: string;

  @Prop()
  reserved: boolean;

  @Prop()
  invoiceAmount: number;

  @Prop({ required: false })
  invoiceId: string;
}

export const MesaSchema = SchemaFactory.createForClass(Mesa);
