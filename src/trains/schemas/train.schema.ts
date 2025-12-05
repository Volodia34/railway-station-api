import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TrainDocument = Train & Document;

@Schema()
export class Train {
  @Prop({ required: true })
  trainNumber: string;

  @Prop({ required: true })
  route: string;

  @Prop({ required: true })
  departureTime: Date;

  @Prop({ required: true })
  arrivalTime: Date;

  @Prop({ required: true })
  price: number;

  @Prop({ default: 0 })
  seatsTotal: number;

  @Prop({ default: 0 })
  seatsAvailable: number;
}

export const TrainSchema = SchemaFactory.createForClass(Train);
