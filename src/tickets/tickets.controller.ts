import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Post()
  create(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketsService.create(createTicketDto);
  }

  @Get('booked/:trainId')
  async getBookedSeats(@Param('trainId') trainId: string) {
    const tickets = await this.ticketsService.findByTrainId(trainId);
    return tickets.map((t) => ({
      carriage: t.carriageNumber,
      seat: t.seatNumber,
    }));
  }

  @Get()
  findAll() {
    return this.ticketsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ticketsService.findOne(+id);
  }
}
