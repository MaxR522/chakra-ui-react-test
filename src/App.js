import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import Login from './pages/login';
import Register from './pages/register';
import Navbar from './components/navbar/navbar';
import ForgotPassword from './pages/forgot_password';
import Confirmation from './pages/confirmation';
import isUserConnected from './utils/isUserConnected';

const queryClient = new QueryClient();

const isConnected = isUserConnected();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Navbar />

        <Routes>
          {/* Hide login and signup page if user is connected */}
          {isConnected ? (
            <Route path="/" element={<div>Hello World!</div>} />
          ) : (
            <>
              <Route path="/" element={<div>Hello World!</div>} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/confirmation" element={<Confirmation />} />
            </>
          )}
        </Routes>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
