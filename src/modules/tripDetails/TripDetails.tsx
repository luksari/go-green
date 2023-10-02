import {
  Box,
  Container,
  VStack,
  Text,
  Heading,
  Image,
  Icon,
  UnorderedList,
  ListItem,
  Stack,
} from '@chakra-ui/react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useGetTripDetails } from '../../api/useGetTripDetails/useGetTripDetails';
import { TripDetailsCard } from './components/tripDetailsCard/TripDetailsCard';
import { TripAdvantage } from './components/tripAdvantage/TripAdvantage';
import { Flag, GlobeHemisphereWest, Suitcase, UsersThree } from '@phosphor-icons/react';

const tripAdvantagesIconList = [
  <Icon as={Flag} key='flag' boxSize={8} />,
  <Icon as={GlobeHemisphereWest} key='globe' boxSize={8} />,
  <Icon as={Suitcase} key='suitcase' boxSize={8} />,
  <Icon as={UsersThree} key='users' boxSize={8} />,
];
/**
 * @todo
 * 1. Skeleton Loader
 * 2. Get exact sizes/fonts/colors from Figma
 * 3. Handle error state with e.g Load more button
 */
export const TripDetails = () => {
  const params = useParams();
  const tripId = params.tripId;

  const { data, isLoading } = useGetTripDetails(Number(tripId));
  const trip = data?.trip;

  if (!data?.trip && isLoading) {
    return (
      <Box w='100%' minH='100vh' h='100%' bg='gray.200' position={'relative'}>
        <Container maxW={'container.lg'} minH={'100vh'} py='2'>
          <Text>Loading...</Text>
        </Container>
      </Box>
    );
  }

  return (
    <Box w='100%' minH='100vh' h='100%' bg='gray.200' position={'relative'}>
      <Container maxW={'container.lg'} minH={'100vh'} py='2'>
        <VStack gap={[6, null, 10]} alignItems='flex-start'>
          <Link to='/'>
            <Text color='gray.600' fontSize={'xs'} textDecor={'underline'}>
              Go back
            </Text>
          </Link>
          <VStack mb='8' alignItems={'flex-start'}>
            <VStack mb='2' alignItems={'flex-start'}>
              <Heading size={'2xl'} color='gray.800'>
                {trip?.title}
              </Heading>
              <Text fontSize='xs' fontWeight={'bold'} color='gray.600'>
                {trip?.subtitle}
              </Text>
            </VStack>
            <Stack gap='8' alignItems={'flex-start'} direction={['column', null, 'row']}>
              <Image src={trip?.photoUrl} borderRadius={'xl'} w={['100%', null, '70%']} />
              <TripDetailsCard
                countries={trip?.countries as string[]}
                days={trip?.days as number}
                emission={trip?.co2kilograms as number}
              />
            </Stack>
            <VStack mb='2'>
              <VStack w={['100%', null, '70%']} alignItems={'flex-start'} mr='auto'>
                <Heading size={'md'} color='gray.600' mb='4'>
                  Overview
                </Heading>
                <UnorderedList
                  ml={0}
                  gap='4'
                  listStyleType={'none'}
                  display={'grid'}
                  gridTemplateColumns={['1fr', null, '1fr 1fr']}
                  w='100%'
                >
                  {trip?.advantages.map((advantage, idx) => (
                    <ListItem key={advantage.title}>
                      <TripAdvantage
                        icon={tripAdvantagesIconList[idx]}
                        title={advantage.title}
                        description={advantage.description}
                      />
                    </ListItem>
                  ))}
                </UnorderedList>
              </VStack>
              <Text mt='4' w={['100%', null, '80%']} mr={[null, null, 'auto']}>
                {trip?.description}
              </Text>
            </VStack>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};
