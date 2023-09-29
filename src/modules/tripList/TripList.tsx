import { useGetInfiniteTrips } from '../../api/useGetTrips/useGetTrips';

export const TripList = () => {
  const { data, fetchNextPage } = useGetInfiniteTrips();
  return (
    <div>
      <button onClick={() => fetchNextPage()}></button>
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
      {/* <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
        gap={6}
      ></Grid> */}
    </div>
  );
};
