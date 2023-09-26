import { ChakraProvider } from '@chakra-ui/react';
import { AppRouter } from './router';

const App = () => {
  return (
    <ChakraProvider>
      <AppRouter />
    </ChakraProvider>
  );
};

export default App;
