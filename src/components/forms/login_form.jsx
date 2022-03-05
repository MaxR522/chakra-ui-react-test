import React, { useState } from 'react';

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
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../validators/auth_fields';

const LoginForm = () => {
  // init useForm hook
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  // init useState hook
  const [hide, setHide] = useState(true);

  /**
   * handle password hide or showing
   */
  const handleHide = () => {
    setHide(!hide);
  };

  /**
   * handle form submit
   * @param {*} data {email, password}
   */
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex minH={'70vh'} align={'center'} justify={'center'}>
          <Box boxShadow={'lg'} rounded={'lg'} p={8}>
            {/* Email form with Regex validation to check if valid email is provided */}
            <FormControl isInvalid={errors && errors.email} isRequired>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="email" {...register('email')} />

              {/* display email error message */}
              <FormErrorMessage>
                {errors && errors.email && errors.email.message}
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
              <Button mt={4} colorScheme="teal" type="submit">
                Login
              </Button>
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
