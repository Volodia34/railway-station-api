import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Carriage {
  @Prop({ required: true })
  number: number;

  @Prop({ required: true, enum: ['pla', 'cup', 'lux'] })
  type: string;

  @Prop({ required: true })
  seatsTotal: number;
}

export const CarriageSchema = SchemaFactory.createForClass(Carriage);
