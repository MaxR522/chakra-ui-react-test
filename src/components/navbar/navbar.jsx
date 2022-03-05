import React from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box boxShadow={'base'} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            {/* <Box>Logo</Box> */}
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              <Button
                as={'a'}
                size={'lg'}
                fontWeight={400}
                variant={'link'}
                href={'/'}
                mr={4}
                color={'black'}
              >
                Home
              </Button>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button
              as={'a'}
              size={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'/login'}
              mr={4}
            >
              Sign In
            </Button>

            <Button
              as={'a'}
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              href={'/register'}
            >
              Register
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <Button
                as={'a'}
                size={'lg'}
                fontWeight={400}
                variant={'link'}
                href={'/'}
                mr={4}
                color={'black'}
              >
                Home
              </Button>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
