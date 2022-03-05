import React, { useState } from 'react';

import {
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Box,
  Stack,
  HStack,
  Text,
  Link,
  InputGroup,
  InputRightElement,
  Icon,
  FormErrorMessage,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../../validators/auth_fields';

const RegisterForm = () => {
  // init useForm hook with yup validation
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  // init state for handling password hide or showing
  const [hide, setHide] = useState(true);
  const [hide2, setHide2] = useState(true);

  /**
   * handle password hide or showing
   * @param setHide function to update state
   * @param hide state value of hide
   */
  const handleHide = (setHide, hide) => {
    setHide(!hide);
  };

  /**
   * handle submit
   * @param {*} data {firstName, lastName, username, email, password, dateBirth, gender}
   */
  const onSubmit = data => {
    delete data['passwordConfirmation'];
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex minH={'80vh'} align={'center'} justify={'center'}>
          <Box boxShadow={'lg'} rounded={'lg'} p={8}>
            {/* Stack of firstName and lastName field */}
            <Stack>
              <HStack>
                {/* First name field */}
                <FormControl isRequired isInvalid={errors && errors.firstName}>
                  <FormLabel htmlFor="firstName">First name</FormLabel>
                  <Input
                    id="firstName"
                    type="text"
                    {...register('firstName')}
                  />

                  {/* Display first name error if error */}
                  <FormErrorMessage>
                    {errors && errors.firstName && errors.firstName.message}
                  </FormErrorMessage>
                </FormControl>

                {/* Last name field */}
                <FormControl isRequired isInvalid={errors && errors.lastName}>
                  <FormLabel htmlFor="lastName">Last name</FormLabel>
                  <Input id="lastName" type="text" {...register('lastName')} />

                  {/* display last name error if error */}
                  <FormErrorMessage>
                    {errors && errors.lastName && errors.lastName.message}
                  </FormErrorMessage>
                </FormControl>
              </HStack>
            </Stack>

            {/* username field */}
            <FormControl isRequired isInvalid={errors && errors.usernam}>
              <FormLabel mt={2} htmlFor="username">
                Username
              </FormLabel>
              <Input
                id="username"
                type="text"
                {...register('username', {
                  required: 'username is required',
                })}
              />

              {/* display username error if error */}
              <FormErrorMessage>
                {errors && errors.username && errors.username.message}
              </FormErrorMessage>
            </FormControl>

            {/* email field */}
            <FormControl isRequired isInvalid={errors && errors.email}>
              <FormLabel mt={2} htmlFor="email">
                Email
              </FormLabel>
              <Input id="email" type="email" {...register('email')} />

              {/* display error message if error */}
              <FormErrorMessage>
                {errors && errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>

            {/* password field */}
            <FormControl isRequired isInvalid={errors && errors.password}>
              <FormLabel mt={2} htmlFor="password">
                Password
              </FormLabel>

              {/* add button to show/hide password field */}
              <InputGroup>
                <Input
                  id="password"
                  type={hide ? 'password' : 'text'}
                  {...register('password')}
                />
                {/* button to show/hide */}
                <InputRightElement width="4.5rem">
                  <Button
                    title="show/hide password"
                    h="1.75rem"
                    size="sm"
                    onClick={() => handleHide(setHide, hide)}
                  >
                    {hide ? <Icon as={ViewIcon} /> : <Icon as={ViewOffIcon} />}
                  </Button>
                </InputRightElement>
              </InputGroup>

              {/* display password error if error */}
              <FormErrorMessage>
                {errors && errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>

            {/* password confirmation field */}
            <FormControl
              isRequired
              isInvalid={errors && errors.passwordConfirmation}
            >
              <FormLabel mt={2} htmlFor="passwordConfirmation">
                Password confirmation
              </FormLabel>

              {/* add button to show/hide password field */}
              <InputGroup>
                <Input
                  id="passwordConfirmation"
                  type={hide2 ? 'password' : 'text'}
                  {...register('passwordConfirmation')}
                />
                {/* button to show/hide */}
                <InputRightElement width="4.5rem">
                  <Button
                    title="show/hide password"
                    h="1.75rem"
                    size="sm"
                    onClick={() => handleHide(setHide2, hide2)}
                  >
                    {hide2 ? <Icon as={ViewIcon} /> : <Icon as={ViewOffIcon} />}
                  </Button>
                </InputRightElement>
              </InputGroup>

              {/* display password confirmation error if error */}
              <FormErrorMessage>
                {errors &&
                  errors.passwordConfirmation &&
                  errors.passwordConfirmation.message}
              </FormErrorMessage>
            </FormControl>

            {/* date of birth field */}
            <Stack>
              <HStack>
                <FormControl isRequired isInvalid={errors && errors.dateBirth}>
                  <FormLabel mt={2} htmlFor="dateBirth">
                    Date of birth
                  </FormLabel>
                  <Input
                    id="dateBirth"
                    type="date"
                    {...register('dateBirth')}
                  />

                  {/* display date of birth error if error */}
                  <FormErrorMessage>
                    {errors && errors.dateBirth && errors.dateBirth.message}
                  </FormErrorMessage>
                </FormControl>

                {/* gender field */}
                <FormControl isRequired isInvalid={errors && errors.gender}>
                  <FormLabel mt={2} htmlFor="gender">
                    Gender
                  </FormLabel>
                  <Select placeholder="Select gender" {...register('gender')}>
                    <option value="male">male</option>
                    <option value="female">female</option>
                    <option value="other">other</option>
                    <option value="not say">not say</option>
                  </Select>

                  {/* display gender error if error */}
                  <FormErrorMessage>
                    {errors && errors.gender && errors.gender.message}
                  </FormErrorMessage>
                </FormControl>
              </HStack>
            </Stack>

            {/* button stack */}
            <Stack>
              <Button mt={4} colorScheme="teal" type="submit">
                Register
              </Button>
            </Stack>

            {/* Text with link to redirect to register */}
            <Text align={'center'} mt={4}>
              Already have an account:{' '}
              <Link color="teal.500" href="/login">
                login
              </Link>
            </Text>
          </Box>
        </Flex>
      </form>
    </>
  );
};

export default RegisterForm;
