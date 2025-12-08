import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Train } from '../../trains/schemas/train.schema';

export type TicketDocument = Ticket & Document;

@Schema()
export class Ticket {
  @Prop({ required: true })
  passengerName: string;

  @Prop({ type: Types.ObjectId, ref: 'Train', required: true })
  train: Train;

  @Prop({ default: Date.now })
  purchaseDate: Date;
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);
