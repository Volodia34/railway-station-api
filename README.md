# 🚂 Railway Station API

A powerful backend service designed to handle the complex logic of a railway booking system. Built with **NestJS**, it ensures type safety, scalability, and seamless integration with MongoDB.

## 🛠️ Tech Stack

- **Framework:** NestJS (Node.js)
- **Database:** MongoDB (via Mongoose)
- **Language:** TypeScript
- **Hosting:** Render.com

## 🔌 API Features

- **Train Management:** CRUD operations for trains, including route details and schedules.
- **Dynamic Carriages:** Support for complex train compositions (Coupe, Platzkart, Lux) embedded within train documents.
- **Ticket Booking:** Real-time seat reservation logic that prevents double bookings.
- **Search Engine:** Advanced filtering by date and city pairs using MongoDB aggregation/regex.

## ⚙️ Environment Variables

Create a `.env` file in the root of the project:
```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

## 🚀 Installation & Running

Navigate to the API folder:
```bash
cd railway-station-api
```

Install dependencies:
```bash
npm install
```

Run in development mode:
```bash
npm run start:dev
```

API will be available at:
```
http://localhost:3000
```

Build for production:
```bash
npm run build
npm run start:prod
```

## 📡 Key Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /trains | Get all trains (?from, ?to, ?date) |
| POST | /trains | Create a new train (Admin) |
| GET | /trains/:id | Get details of a specific train |
| DELETE | /trains/:id | Delete a train (Admin) |
| POST | /tickets | Book a specific seat |
| GET | /tickets | Get list of all booked tickets |
| GET | /tickets/booked/:trainId | Get occupied seats for a train |

## 📂 Project Structure
```
src/
  trains/   - Logic for trains, routes, and carriages management
  tickets/  - Logic for ticket booking and seat reservation
  schemas/  - Mongoose schemas (Train, Carriage, Ticket)
```
