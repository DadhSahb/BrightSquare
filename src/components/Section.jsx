import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Section = ({ id, title, children, bg = 'white', color = 'black' }) => (
  <Box as="section" id={id} py="16" px="8" bg={bg} color={color}>
    <Text fontSize="3xl" fontWeight="bold" mb="4">
      {title}
    </Text>
    {children}
  </Box>
);

export default Section;
