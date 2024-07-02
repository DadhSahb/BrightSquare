import React from 'react';
import { Box, Stack, Text } from '@chakra-ui/react';
import Section from './Section';

const Reviews = () => (
  <Section id="reviews" title="Client Reviews">
    <Stack spacing="8">
      <Box p="6" boxShadow="lg" borderRadius="md" bg="gray.700" color="white">
        <Text fontSize="xl" fontWeight="bold">
          Romario De Silva
        </Text>
        <Text mt="2">
          "I am very satisfied. I recommend Altitude Solutions to anyone in need
          of design and digital marketing services. One of the best!"
        </Text>
      </Box>
      <Box p="6" boxShadow="lg" borderRadius="md" bg="gray.700" color="white">
        <Text fontSize="xl" fontWeight="bold">
          Romario De Silva
        </Text>
        <Text mt="2">
          "I am very satisfied. I recommend Altitude Solutions to anyone in need
          of design and digital marketing services. One of the best!"
        </Text>
      </Box>
    </Stack>
  </Section>
);

export default Reviews;
