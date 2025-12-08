import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { TrainsService } from './trains.service';
import { CreateTrainDto } from './dto/create-train.dto';
import { UpdateTrainDto } from './dto/update-train.dto';

@Controller('trains')
export class TrainsController {
  constructor(private readonly trainsService: TrainsService) {}

  @Post()
  create(@Body() createTrainDto: CreateTrainDto) {
    return this.trainsService.create(createTrainDto);
  }

  @Get()
  findAll(
    @Query('from') from?: string,
    @Query('to') to?: string,
    @Query('date') date?: string,
  ) {
    return this.trainsService.findAll(from, to, date);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trainsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTrainDto: UpdateTrainDto) {
    return this.trainsService.update(id, updateTrainDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trainsService.remove(id);
  }
}
