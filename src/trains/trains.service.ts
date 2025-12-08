// src/trains/trains.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, FilterQuery } from 'mongoose';
import { CreateTrainDto } from './dto/create-train.dto';
import { UpdateTrainDto } from './dto/update-train.dto';
import { Train, TrainDocument } from './schemas/train.schema';

@Injectable()
export class TrainsService {
  constructor(
    @InjectModel(Train.name) private trainModel: Model<TrainDocument>,
  ) {}

  private escapeRegExp(input: string): string {
    return input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  async create(createTrainDto: CreateTrainDto): Promise<Train> {
    const createdTrain = new this.trainModel(createTrainDto);
    return createdTrain.save();
  }

  async findAll(from?: string, to?: string, date?: string): Promise<Train[]> {
    const filter: FilterQuery<TrainDocument> = {};

    if (from && to) {
      filter.route = {
        $regex: new RegExp(
          `${this.escapeRegExp(from)}.*${this.escapeRegExp(to)}`,
          'i',
        ),
      };
    }

    if (date) {
      const startDate = new Date(date);
      startDate.setHours(0, 0, 0, 0);

      const endDate = new Date(startDate);
      endDate.setDate(endDate.getDate() + 1);

      filter.departureTime = {
        $gte: startDate,
        $lt: endDate,
      };
    }

    return this.trainModel.find(filter).exec();
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
