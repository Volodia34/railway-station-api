import { Injectable, BadRequestException } from '@nestjs/common'; // Додай BadRequestException
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { Ticket, TicketDocument } from './schemas/ticket.schema';

@Injectable()
export class TicketsService {
  constructor(
    @InjectModel(Ticket.name) private ticketModel: Model<TicketDocument>,
  ) {}

  async create(createTicketDto: CreateTicketDto): Promise<Ticket> {
    const existingTicket = await this.ticketModel
      .findOne({
        train: createTicketDto.trainId,
        carriageNumber: createTicketDto.carriageNumber,
        seatNumber: createTicketDto.seatNumber,
      })
      .exec();

    if (existingTicket) {
      throw new BadRequestException('Seat is already booked');
    }

    const newTicket = new this.ticketModel({
      passengerName: createTicketDto.passengerName,
      train: createTicketDto.trainId,
      carriageNumber: createTicketDto.carriageNumber,
      seatNumber: createTicketDto.seatNumber,
    });
    return newTicket.save();
  }

  async findAll(): Promise<Ticket[]> {
    return this.ticketModel.find().populate('train').exec();
  }

  findOne(id: number) {
    return `Action #${id}`;
  }

  async findByTrainId(trainId: string): Promise<Ticket[]> {
    return this.ticketModel.find({ train: trainId }).exec();
  }
}
