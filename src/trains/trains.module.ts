import { Module } from '@nestjs/common';
import { TrainsService } from './trains.service';
import { TrainsController } from './trains.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Train, TrainSchema } from './schemas/train.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Train.name, schema: TrainSchema }]),
  ],
  controllers: [TrainsController],
  providers: [TrainsService],
})
export class TrainsModule {}
