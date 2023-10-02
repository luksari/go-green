import { useQuery } from '@tanstack/react-query';
import { GetTripDetailsRes } from '../../mock/types';
import { axiosClient } from '../axios';

const getTripDetails = async (tripId: number): Promise<GetTripDetailsRes> => {
  const data = await axiosClient.get<GetTripDetailsRes>(`/single-trip/${tripId}`);

  return {
    trip: data.data.trip,
  };
};

export const useGetTripDetails = (tripId: number) => {
  return useQuery(['single-trip', tripId], () => getTripDetails(tripId));
};
