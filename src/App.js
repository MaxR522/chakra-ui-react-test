import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/login';
import Register from './pages/register';
import Navbar from './components/navbar/navbar';
import ForgotPassword from './pages/forgot_password';
import Confirmation from './pages/confirmation';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />

      <Routes>
        <Route path="/" element={<div>Hello World!</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
