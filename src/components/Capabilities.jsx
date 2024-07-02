import React from 'react';
import { Box, Grid, Text, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaMobileAlt, FaLaptopCode, FaCheckCircle } from 'react-icons/fa';
import Section from './Section';

const MotionBox = motion(Box);

const Capabilities = () => {
  const gridItems = [
    {
      title: 'Mobile App Development',
      description:
        'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
      icon: FaMobileAlt,
    },
    {
      title: 'Web Design & Development',
      description:
        'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
      icon: FaLaptopCode,
    },
    {
      title: 'Software Testing Service',
      description:
        'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
      icon: FaCheckCircle,
    },
    {
      title: 'Software Testing Service',
      description:
        'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
      icon: FaCheckCircle,
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Section id="capabilities" title="Our Capabilities">
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam.
      </Text>
      <Grid
        templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
        gap="6"
        mt="8"
      >
        {gridItems.map((item, index) => (
          <MotionBox
            key={index}
            p="6"
            boxShadow="lg"
            borderRadius="md"
            bg="gray.700"
            color="white"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            transition={{ duration: 0, delay: index * 0 }}
            _hover={{
              transform: 'scale(1.05)',
              boxShadow: 'xl',
              cursor: 'pointer',
            }}
            whileHover={{ scale: 1.05 }}
            style={{
              position: 'relative',
              transition:
                'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
            }}
          >
            <Icon as={item.icon} boxSize={10} color="teal.300" />
            <Text fontSize="xl" fontWeight="bold" mt="4">
              {item.title}
            </Text>
            <Text mt="4">{item.description}</Text>
          </MotionBox>
        ))}
      </Grid>
    </Section>
  );
};

export default Capabilities;
