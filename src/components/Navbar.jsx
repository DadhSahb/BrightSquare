import React from 'react';
import { Flex, Link, Box, Button, Text } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex
      as="nav"
      p="4"
      justify="space-between"
      align="center"
      bg="transparent"
      color="white"
      position="absolute"
      width="100%"
      zIndex="10"
    >
      <Box>
        <Link href="#home">
          <Text fontSize="xl" fontWeight="bold">
            Logo
          </Text>
        </Link>
      </Box>
      <Flex justify="flex-end" flex="1">
        <Link href="#home" p="2" mx="2">
          Home
        </Link>
        <Link href="#about" p="2" mx="2">
          About
        </Link>
        <Link href="#capabilities" p="2" mx="2">
          Capabilities
        </Link>
        <Link href="#projects" p="2" mx="2">
          Projects
        </Link>
        <Link href="#reviews" p="2" mx="2">
          Reviews
        </Link>
        <Link href="#contact" p="2" mx="2">
          Contact
        </Link>
        <Box>
          <Button
            colorScheme="teal"
            variant="outline"
            onClick={() =>
              document
                .getElementById('contact')
                .scrollIntoView({ behavior: 'smooth' })
            }
          >
            Contact Us
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;
