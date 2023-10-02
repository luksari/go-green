import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { TripDetails } from '../modules/tripDetails/TripDetails';
import { TripList } from '../modules/tripList/TripList';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<TripList />} />,
      <Route path='/:tripId' element={<TripDetails />} />,
    </>,
  ),
);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
