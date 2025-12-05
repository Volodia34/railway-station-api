export class CreateTrainDto {
  trainNumber: string;
  route: string;
  departureTime: Date;
  arrivalTime: Date;
  price: number;
  seatsTotal: number;
}
