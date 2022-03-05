import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Box,
  Flex,
  FormErrorMessage,
} from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationCodeSchema } from '../../validators/auth_fields';

const CodeConfirmation = () => {
  // init useForm hook with yup validation
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationCodeSchema) });

  const onSubmit = data => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex minH={'70vh'} align={'center'} justify={'center'}>
          <Box boxShadow={'lg'} rounded={'lg'} p={8}>
            <FormControl isInvalid={errors && errors.code} isRequired>
              <FormLabel htmlFor="code">code</FormLabel>
              <Input id="code" type="text" {...register('code')} />

              <FormErrorMessage>
                {errors && errors.code && errors.code.message}
              </FormErrorMessage>
            </FormControl>

            <Stack>
              <Button mt={4} colorScheme="teal" type="submit">
                Submit
              </Button>
            </Stack>
          </Box>
        </Flex>
      </form>
    </>
  );
};

export default CodeConfirmation;
