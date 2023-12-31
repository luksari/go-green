import singleTripDataMock from './single-trip.json';
import allTripDataMock from './trips.json';
import express from 'express';
import { GetTripDetailsRes, GetTripsRes } from './types';
import cors from 'cors';

const app = express();
const port = 8080;
const DEFAULT_PER_PAGE = 6;

app.use(
  cors({
    origin: 'http://localhost:5173',
  }),
);

app.get<unknown, GetTripsRes>('/api/trips', (req, res) => {
  const offset = isNaN(Number(req.query.offset)) ? 0 : Number(req.query.offset);
  const limit = isNaN(Number(req.query.limit)) ? DEFAULT_PER_PAGE : Number(req.query.limit);

  const trips = allTripDataMock.slice(offset, limit + offset);

  return res.status(200).json({ trips, offset, limit, total: allTripDataMock.length });
});

app.get<unknown, GetTripDetailsRes>('/api/single-trip/:tripId', (req, res) => {
  // @NOTE Normally it would return the real data and perform querying in DB via some Controller
  // but for the simplicity reasons we always return the same trip
  const trip = singleTripDataMock;

  return res.status(200).json({ trip });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
