import React from 'react';
import { Box, Flex, Text, Button, Image } from '@chakra-ui/react';
import HeroImage from '../Assests/HeroImage.png';

const Hero = () => {
  return (
    <Box position="relative" height="100vh" overflow="hidden">
      <Image
        src={HeroImage}
        alt="Background Image"
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        objectFit="cover"
        style={{ filter: 'brightness(0.5)' }}
      />
      <Flex
        direction="column"
        align="center"
        justify="center"
        height="100%"
        position="relative"
        zIndex="1"
        textAlign="center"
        color="white"
      >
        <Box>
          <Text fontSize="6xl" fontWeight="bold">
            <Text as="span" fontFamily="My Soul" fontWeight="400">
              Brighten{' '}
            </Text>
            <Text as="span">Your Digital</Text>
            <Text as="span" fontFamily="My Soul" fontWeight="400">
              {' '}
              Journey
            </Text>
          </Text>
        </Box>
        <Text fontSize="xl" mt="4">
          Got it! With over 20 years in the IT field, we excel in delivering
          premier technology and digital solutions.
        </Text>
        <Button
          mt="8"
          colorScheme="teal"
          variant="outline"
          size="lg"
          onClick={() =>
            document
              .getElementById('contact')
              .scrollIntoView({ behavior: 'smooth' })
          }
        >
          Contact Us
        </Button>
      </Flex>
    </Box>
  );
};

export default Hero;
