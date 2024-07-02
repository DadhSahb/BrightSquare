import React, { useState } from 'react';
import { Box, IconButton, Image } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Box position="relative" width="full" maxW="100%" mx="auto">
      <IconButton
        icon={<ArrowBackIcon />}
        onClick={prevSlide}
        position="absolute"
        top="50%"
        left="0"
        transform="translateY(-50%)"
        zIndex="10"
        bg="white"
        _hover={{ bg: 'gray.200' }}
      />
      <IconButton
        icon={<ArrowForwardIcon />}
        onClick={nextSlide}
        position="absolute"
        top="50%"
        right="0"
        transform="translateY(-50%)"
        zIndex="10"
        bg="white"
        _hover={{ bg: 'gray.200' }}
      />
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        overflow="hidden"
        gap="4"
      >
        {images.map((image, index) => (
          <Box
            key={index}
            display={
              index >= currentIndex && index < currentIndex + 3
                ? 'block'
                : 'none'
            }
          >
            <Image
              src={image.src}
              alt={image.alt}
              width="100%"
              height="auto"
              objectFit="cover"
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Carousel;
