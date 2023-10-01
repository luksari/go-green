import {
  Card,
  CardBody,
  Image,
  Box,
  VStack,
  Text,
  Button,
  Link,
  forwardRef,
} from '@chakra-ui/react';
import { TripCardProps } from './TripCard.types';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

/**
 * @TODO
 * 1. Translations
 * 2. Exact colors/sizes but Figma would be useful
 * 3. Tests for showing units in kg/t
 */
export const TripCard = forwardRef<TripCardProps, 'div'>(
  ({ className, noOfCountries, emissionOffset, noOfDays, imgSrc, title, id }, ref) => {
    const { t } = useTranslation();
    const emissionOffsetInUnit =
      emissionOffset > 1000
        ? `${(emissionOffset / 1000).toFixed(1)} t`
        : `${emissionOffset.toFixed(1)} kg`;

    return (
      <Card className={clsx(className)} size='sm' ref={ref}>
        <CardBody>
          <Box position={'relative'} h='250px'>
            <VStack
              gap={0}
              zIndex={'overlay'}
              position={'absolute'}
              w='100%'
              h='100%'
              px={2}
              py={4}
              justifyContent='center'
            >
              <Text color={'white'} fontSize={'xl'} mb='1' align={'center'} fontWeight='bold'>
                {title}
              </Text>
              <Text color='white' fontSize={'xs'} mb='2'>
                {t('countries', { count: noOfCountries })}, {t('days', { count: noOfDays })}
              </Text>
              <Link mt='auto' href={`/${id}`}>
                <Button size='sm' colorScheme='blue'>
                  Learn more!
                </Button>
              </Link>
              <VStack gap={2} mt='auto' transform='translateY(20px)' w='80%'>
                <Box
                  w='100%'
                  background={'gray.900'}
                  color='white'
                  fontSize={'xs'}
                  display={'flex'}
                  flexWrap={'nowrap'}
                  px='3'
                  py='2'
                  borderRadius='md'
                >
                  <Text>Emission offset:</Text>
                  <Text ml='auto' align='right'>
                    {emissionOffsetInUnit} CO<sub>2</sub>e
                  </Text>
                </Box>
                <Box
                  w='100%'
                  borderTopLeftRadius={'md'}
                  borderTopRightRadius={'md'}
                  bg='white'
                  px='2'
                  py='3'
                >
                  <Text fontSize={'xs'}>Trip rating: </Text>
                </Box>
              </VStack>
            </VStack>
            <Box
              position={'absolute'}
              left={0}
              top={0}
              w='100%'
              h='100%'
              borderRadius={'md'}
              overflow={'hidden'}
              zIndex={'base'}
            >
              <Box
                zIndex={'overlay'}
                w='100%'
                h='100%'
                bg='transparent'
                position={'absolute'}
                boxShadow='inset 0px 100px 100px -58px rgba(0, 0, 0, 1)'
              />
              <Image src={imgSrc} w='100%' h='100%' objectFit='cover' alt={title} />
            </Box>
          </Box>
        </CardBody>
      </Card>
    );
  },
);
