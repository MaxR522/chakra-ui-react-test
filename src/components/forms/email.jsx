import React from 'react';

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Link,
  Box,
  Flex,
  FormErrorMessage,
} from '@chakra-ui/react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { emailSchema } from '../../validators/auth_fields';

const EmailForm = () => {
  // init useForm hook with yup validation
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(emailSchema) });

  /**
   * handle form submit
   * @param {*} data {email}
   */
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex minH={'70vh'} align={'center'} justify={'center'}>
          <Box boxShadow={'lg'} rounded={'lg'} p={8}>
            <FormControl isInvalid={errors && errors.email} isRequired>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="email" {...register('email')} />
              <FormErrorMessage>
                {errors && errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>

            <Stack>
              <Button mt={4} colorScheme="teal" type="submit">
                Submit
              </Button>
            </Stack>

            <Text align={'center'} mt={4}>
              Don't have an account ?{' '}
              <Link color="teal.500" href="/register">
                register
              </Link>
            </Text>
          </Box>
        </Flex>
      </form>
    </>
  );
};

export default EmailForm;
