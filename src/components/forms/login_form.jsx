import React, { useState } from 'react';
import axios from 'axios';
import { useMutation } from 'react-query';
import { useForm } from 'react-hook-form';
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
  InputGroup,
  InputRightElement,
  Icon,
  FormErrorMessage,
  useToast,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../validators/auth_fields';

const LoginForm = () => {
  // init useForm hook to handle form state
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  // init useState hook to handle show/hide password button
  const [hide, setHide] = useState(true);

  // init toast hook provided by chakra-ui to display toast messages
  const toast = useToast();

  // init mutation hook provided by react-query to handle api requests
  const mutation = useMutation(
    data => {
      return axios.post('http://localhost:2222/api/auth/login', data);
    },
    {
      // handle error
      onError: error => {
        toast({
          title: 'Error',
          description: error.response?.data.message,
          status: 'error',
          duration: 9000,
          position: 'top',
          isClosable: true,
        });
      },
      // handle success: save inside localStorage & redirect to home
      onSuccess: data => {
        localStorage.setItem('token', data.data.token);
        localStorage.setItem('currentUser', JSON.stringify(data.data.data));
        toast({
          title: 'Login Success',
          description: data.data.message,
          status: 'success',
          duration: 9000,
          position: 'top',
          isClosable: true,
        });

        setTimeout(() => {
          window.location.href = '/';
        }, 1000);
      },
    }
  );

  /**
   * handle password hide or showing
   */
  const handleHide = () => {
    setHide(!hide);
  };

  /**
   * handle form submit
   * @param {*} data {login, password}
   */
  const onSubmit = async data => {
    // call mutation hook
    mutation.mutate(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex minH={'70vh'} align={'center'} justify={'center'}>
          <Box boxShadow={'lg'} rounded={'lg'} p={8}>
            {/* Email or username form field */}
            <FormControl isInvalid={errors && errors.login} isRequired>
              <FormLabel htmlFor="login">Email or Username</FormLabel>
              <Input id="login" type="text" {...register('login')} />

              {/* display login error message */}
              <FormErrorMessage>
                {errors && errors.login && errors.login.message}
              </FormErrorMessage>
            </FormControl>

            {/* Password form: Required */}
            <FormControl isInvalid={errors && errors.password} isRequired>
              <FormLabel htmlFor="password" mt={2}>
                Password
              </FormLabel>
              <InputGroup>
                <Input
                  id="password"
                  type={hide ? 'password' : 'text'}
                  {...register('password')}
                />
                {/* Button to show or hide password */}
                <InputRightElement width="4.5rem">
                  <Button
                    title="show/hide password"
                    h="1.75rem"
                    size="sm"
                    onClick={() => handleHide()}
                  >
                    {/* if button clicked, show, if re-clicked, hide. Default value: hide */}
                    {hide ? <Icon as={ViewIcon} /> : <Icon as={ViewOffIcon} />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {/* display error password message */}
              <FormErrorMessage>
                {errors && errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>

            {/* Submit button */}
            <Stack>
              <Link
                mt={2}
                align={'center'}
                color="teal.500"
                href="/forgot-password"
              >
                forgot password ?
              </Link>
              {mutation.isLoading ? (
                <Button isLoading mt={4} colorScheme="teal" type="submit">
                  Login
                </Button>
              ) : (
                <Button mt={4} colorScheme="teal" type="submit">
                  Login
                </Button>
              )}
            </Stack>

            {/* Text with link that redirect to the register page */}
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

export default LoginForm;
