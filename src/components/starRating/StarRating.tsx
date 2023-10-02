import { StarIcon } from '@chakra-ui/icons';
import { StarRatingProps } from './StarRating.types';
import { Box, HStack, Text } from '@chakra-ui/react';

/**
 * @TODO
 * 1. Tests
 * 2. Make the if statements throwing error when e.g rating > maxStars, maxStars < 1
 * 3. Adjust colors/fonts/gaps
 * **/
export const StarRating = ({ maxStars, rating }: StarRatingProps) => {
  const percentage = (rating / maxStars) * 100;

  return (
    <HStack gap='2'>
      <HStack gap='1' position={'relative'}>
        <Box
          position='absolute'
          left='0'
          top='0'
          bg='yellow.400'
          w={`${percentage}%`}
          h='100%'
          mixBlendMode={'color-dodge'}
        />
        {[...Array(maxStars).keys()].map((num) => (
          <StarIcon key={num} />
        ))}
      </HStack>
      <Text fontSize={'xs'} fontWeight={'bold'}>
        {rating}
      </Text>
    </HStack>
  );
};
