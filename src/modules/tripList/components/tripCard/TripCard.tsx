import { Card, CardBody, Image, Box, VStack, Text, Button, Link } from '@chakra-ui/react';
import { TripCardProps } from './TripCard.types';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

export const TripCard = ({
  className,
  noOfCountries,
  emissionOffset,
  noOfDays,
  imgSrc,
  title,
}: TripCardProps) => {
  const { t } = useTranslation();
  const emissionOffsetInUnit =
    emissionOffset > 1000
      ? `${(emissionOffset / 1000).toFixed(1)} t`
      : `${emissionOffset.toFixed(2)} kg`;

  return (
    <Card className={clsx(className)} size='sm'>
      <CardBody>
        <Box position={'relative'} h='250px'>
          <VStack gap={0} zIndex={'overlay'} position={'absolute'} w='100%' h='100%' px={6} py={4}>
            <Text color={'white'} fontSize={'2xl'}>
              {title}
            </Text>
            <Text color='white' fontSize={'xs'}>
              {t('countries', { count: noOfCountries })}, {t('days', { count: noOfDays })}
            </Text>
            <Link mt='auto'>
              <Button size='md' colorScheme='blue'>
                Learn more!
              </Button>
            </Link>
            <Box
              mt='auto'
              background={'blue.900'}
              color='white'
              w='100%'
              fontSize={'xs'}
              display={'flex'}
              flexWrap={'nowrap'}
              px='3'
              py='2'
              borderRadius='md'
            >
              <Text>Emission offset:</Text>
              <Text ml='auto'>
                {emissionOffsetInUnit} CO<sub>2</sub>e
              </Text>
            </Box>
            <Box
              borderTopLeftRadius={'md'}
              borderTopRightRadius={'md'}
              w='100%'
              bg='white'
              px='2'
              py='3'
              transform='translateY(20px)'
            >
              <Text fontSize={'xs'}>Trip rating: </Text>
            </Box>
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
};
