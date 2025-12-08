import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTrainDto } from './dto/create-train.dto';
import { UpdateTrainDto } from './dto/update-train.dto';
import { Train, TrainDocument } from './schemas/train.schema';

@Injectable()
export class TrainsService {
  constructor(
    @InjectModel(Train.name) private trainModel: Model<TrainDocument>,
  ) {}

  async create(createTrainDto: CreateTrainDto): Promise<Train> {
    const createdTrain = new this.trainModel(createTrainDto);
    return createdTrain.save();
  }

  async findAll(): Promise<Train[]> {
    return this.trainModel.find().exec();
  }

  async findOne(id: string): Promise<Train | null> {
    return this.trainModel.findById(id).exec();
  }

  async update(
    id: string,
    updateTrainDto: UpdateTrainDto,
  ): Promise<Train | null> {
    return this.trainModel
      .findByIdAndUpdate(id, updateTrainDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Train | null> {
    return this.trainModel.findByIdAndDelete(id).exec();
  }
}
