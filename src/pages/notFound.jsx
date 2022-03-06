import { Box, Container, Flex } from '@chakra-ui/react';
import React from 'react';
import notFound from '../assets/404.svg';

const NotFound = () => {
  return (
    <>
      <Container>
        <Flex>
          <Box mt={20}>
            <img src={notFound} alt="404" />
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default NotFound;
