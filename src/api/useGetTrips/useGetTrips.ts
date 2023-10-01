import { useInfiniteQuery } from '@tanstack/react-query';
import { axiosClient } from '../axios';
import { GetTripsRes } from '../../mock/types';

type GetTripsParams = {
  pageParam: number;
};

const PER_PAGE = 6;

const getTrips = async ({ pageParam = 0 }: GetTripsParams): Promise<GetTripsRes> => {
  const offset = pageParam;

  const data = await axiosClient.get<GetTripsRes>('/trips', {
    params: { offset, limit: PER_PAGE },
  });

  return {
    trips: data.data.trips,
    total: data.data.total,
    offset: offset + PER_PAGE,
    limit: PER_PAGE,
  };
};

export const useGetInfiniteTrips = () => {
  return useInfiniteQuery(['trips'], ({ pageParam = 0 }) => getTrips({ pageParam }), {
    getNextPageParam: (res) => res.offset,
  });
};
