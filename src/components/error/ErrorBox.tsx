import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/react';
import { ErrorBoxProps } from './ErrorBox.types';

export const ErrorBox = ({ message, title }: ErrorBoxProps) => {
  return (
    <Alert status='error'>
      <AlertIcon />
      {title && <AlertTitle>{title}</AlertTitle>}
      {message && <AlertDescription>{message}</AlertDescription>}
    </Alert>
  );
};
