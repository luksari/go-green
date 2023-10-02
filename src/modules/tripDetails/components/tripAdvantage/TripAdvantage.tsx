import { HStack, VStack, Text } from '@chakra-ui/react';
import { TripAdvantageProps } from './TripAdvantage.types';

export const TripAdvantage = ({ description, icon: Icon, title }: TripAdvantageProps) => {
  return (
    <HStack gap={3} alignItems={'flex-start'} justifyContent={['center', null]}>
      {Icon}
      <VStack gap={1} alignItems={'flex-start'}>
        <Text fontSize='lg' fontWeight={'bold'}>
          {title}
        </Text>
        <Text>{description}</Text>
      </VStack>
    </HStack>
  );
};
