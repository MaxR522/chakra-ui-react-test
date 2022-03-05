import { Button } from '@chakra-ui/react';
import React from 'react';

const SubmitButton = ({ children }) => {
  return (
    <>
      <Button mt={4} colorScheme="teal" type="submit">
        {children}
      </Button>
    </>
  );
};

export default SubmitButton;
