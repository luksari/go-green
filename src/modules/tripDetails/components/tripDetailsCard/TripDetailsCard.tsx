import {
  Card,
  CardHeader,
  VStack,
  Text,
  HStack,
  CardBody,
  UnorderedList,
  ListItem,
  Divider,
} from '@chakra-ui/react';
import { TripDetailsCardProps } from './TripDetailsCard types';
import { useTranslation } from 'react-i18next';
import { useEmissionUnit } from '../../../../hooks/useEmissionsUnit/useEmissionsUnit';

export const TripDetailsCard = ({ countries, days, emission }: TripDetailsCardProps) => {
  const { t } = useTranslation();
  const emissionOffsetInUnit = useEmissionUnit(emission);
  return (
    <Card w='100%'>
      <CardHeader pb='0'>
        <VStack alignItems={'flex-start'}>
          <Text fontWeight={'bold'} fontSize={'2xl'}>
            {t('days', { count: days })}
          </Text>
          <HStack fontSize={'xs'}>
            <Text fontSize={'xs'} fontWeight={'bold'} color='gray.600'>
              Emissions: {emissionOffsetInUnit} CO<sub>2</sub>e
            </Text>
          </HStack>
        </VStack>
        <Divider mt='4' mb='4' />
      </CardHeader>
      <CardBody pt='0'>
        <UnorderedList color='gray.600' sx={{ columns: 2 }}>
          {countries.map((country) => (
            <ListItem key={country}>{country}</ListItem>
          ))}
        </UnorderedList>
      </CardBody>
    </Card>
  );
};
