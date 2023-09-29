import { ChakraProvider } from '@chakra-ui/react';
import { AppRouter } from './router';
import './i18n/i18n';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <AppRouter />
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default App;
