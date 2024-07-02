import React from 'react';
import { Box, Stack, Text, Image, Button } from '@chakra-ui/react';
import Section from './Section';
import AboutImage from '../Assests/AboutImage.png';

const About = () => (
  <Section id="about" bg="#fff">
    <Stack direction={{ base: 'column', md: 'row' }} spacing="8" align="center">
      <Box position="relative" textAlign="center">
        <Image
          src={AboutImage}
          alt="About Image"
          maxW="100%"
          height="auto"
          position="relative"
        />
        <Box position="absolute" top="20%" left="0" textAlign="center">
          <Text
            color="black"
            fontWeight="bold"
            fontSize="xl"
            bg="white"
            px="4"
            py="2"
            borderRadius="md"
            shadow="0 0 5px rgba(255, 0, 0, 0.5)"
          >
            App Development
          </Text>
        </Box>
        <Box
          position="absolute"
          bottom="20%"
          right="0"
          transform="translatey(-50%)"
          textAlign="center"
        >
          <Text
            color="black"
            fontWeight="bold"
            fontSize="xl"
            bg="white"
            px="4"
            py="2"
            borderRadius="md"
            shadow="0 0 5px rgba(255, 0, 0, 0.5)"
          >
            Website Development
          </Text>
        </Box>
      </Box>
      <Box maxW="600px">
        <Text fontSize="6xl" fontWeight="bold" lineHeight="1.2">
          BRIGHTSQUARE
        </Text>
        <Text mt="4" fontSize="md">
          Lorem ipsum dolor sit amet consectetur. Malesuada facilisis amet
          mattis eu lectus. Lectus augue nibh ultrices diam. Mauris pharetra est
          risus sed feugiat sem tellus. Risus pellentesque massa orci cras non
          urna. Mi accumsan at et enim vehicula sit id amet adipiscing. Eu
          semper nam massa.
        </Text>
        <Text mt="4" fontSize="md">
          Lorem ipsum dolor sit amet consectetur. Malesuada facilisis amet
          mattis eu lectus. Lectus augue nibh ultrices diam. Mauris pharetra est
          risus sed feugiat sem tellus. Risus pellentesque massa orci cras non
          urna. Mi accumsan at et enim vehicula sit id amet adipiscing. Eu
          semper nam massa.
        </Text>
        <Button mt="4" colorScheme="gray" size="lg">
          Read More
        </Button>
      </Box>
    </Stack>
  </Section>
);

export default About;
