import React from 'react';
import {
  Box,
  Stack,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from '@chakra-ui/react';
import Section from './Section';

const Contact = () => (
  <Section id="contact" title="Contact Us">
    <Stack direction={{ base: 'column', md: 'row' }} spacing="8">
      <Box>
        <Text fontSize="xl" fontWeight="bold">
          Contact Information
        </Text>
        <Text mt="4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam.
        </Text>
        <Text mt="2">
          <strong>Phone:</strong> +1 012 3456 789
        </Text>
        <Text mt="2">
          <strong>Email:</strong> demo@gmail.com
        </Text>
        <Text mt="2">
          <strong>Address:</strong> 132 Dartmouth Street Boston, Massachusetts
          02156 United States
        </Text>
      </Box>
      <Box as="form" width="full">
        <FormControl id="name" isRequired>
          <FormLabel>First Name</FormLabel>
          <Input placeholder="First Name" />
        </FormControl>
        <FormControl id="last-name" mt="4" isRequired>
          <FormLabel>Last Name</FormLabel>
          <Input placeholder="Last Name" />
        </FormControl>
        <FormControl id="email" mt="4" isRequired>
          <FormLabel>Email</FormLabel>
          <Input placeholder="Email" />
        </FormControl>
        <FormControl id="phone" mt="4" isRequired>
          <FormLabel>Phone Number</FormLabel>
          <Input placeholder="+1 012 3456 789" />
        </FormControl>
        <FormControl id="subject" mt="4" isRequired>
          <FormLabel>Select Subject</FormLabel>
          <Input placeholder="General Inquiry" />
        </FormControl>
        <FormControl id="message" mt="4" isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Write your message..." />
        </FormControl>
        <Button mt="8" colorScheme="teal" type="submit">
          Send Message
        </Button>
      </Box>
    </Stack>
  </Section>
);

export default Contact;
