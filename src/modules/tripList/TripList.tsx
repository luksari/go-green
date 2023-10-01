import { useEffect } from 'react';
import { useGetInfiniteTrips } from '../../api/useGetTrips/useGetTrips';
import { TripCard } from './components/tripCard/TripCard';
import { Box, Container, Grid, Text } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import { ErrorBox } from '../../components/error/ErrorBox';

/**
 * @TODO
 * 1. Handling isFetchingNextPage state in UI
 * 2. Proper error handling
 * 3. Translations
 * 4. Extract Loading component and make it more appealing
 */
export const TripList = () => {
  const { data, fetchNextPage, hasNextPage, isSuccess, isLoading, isError } = useGetInfiniteTrips();

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  return (
    <Box w='100%' minH='100vh' h='100%' bg='gray.200' position={'relative'}>
      {isLoading && (
        <Box
          position={'absolute'}
          w='100vw'
          h='100vh'
          bg='blue.100'
          zIndex={'overlay'}
          p='10'
          justifyContent={'center'}
          alignItems={'center'}
          display={'flex'}
        >
          <Text fontSize={'3xl'}>Loading data...</Text>
        </Box>
      )}
      <Container py='6' maxW={'container.lg'} justifyContent={'center'}>
        {isError && <ErrorBox title='Oopsie!' message='Something went wrong while fetching!' />}
        {isSuccess && (
          <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={6}>
            {data?.pages.map((tripsPage) =>
              tripsPage.trips.map((trip, idx) => {
                return (
                  <TripCard
                    ref={tripsPage.trips.length === idx + 1 ? ref : undefined}
                    key={trip.id}
                    id={trip.id}
                    emissionOffset={trip.co2kilograms}
                    imgSrc={trip.photoUrl}
                    noOfCountries={trip.countries.length}
                    noOfDays={trip.days}
                    title={trip.title}
                  />
                );
              }),
            )}
          </Grid>
        )}
      </Container>
    </Box>
  );
};
