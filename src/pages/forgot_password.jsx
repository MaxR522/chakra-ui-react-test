import { Container } from '@chakra-ui/react';
import React from 'react';
import EmailForm from '../components/forms/email';

const ForgotPassword = () => {
  return (
    <>
      <Container>
        <EmailForm />
      </Container>
    </>
  );
};

export default ForgotPassword;
