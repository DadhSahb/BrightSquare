import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import Section from './Section';
import Carousel from './Carousel';
import SuperBank from '../Assests/superBank.png';
import ConnectNBuy from '../Assests/ConnectNBuy.png';
import MemoryGame from '../Assests/MemoryGame.png';
import onlineAuctionSystem from '../Assests/onlineAuctionSystem.png';
import propertyRecommender from '../Assests/property recommendar.png';
import googleWildSwimming from '../Assests/googleWildSwimming.png';

const Projects = () => {
  const images = [
    { src: ConnectNBuy, alt: 'Project 1' },
    { src: SuperBank, alt: 'Project 2' },
    { src: MemoryGame, alt: 'Project 3' },
    { src: onlineAuctionSystem, alt: 'Project 4' },
    { src: propertyRecommender, alt: 'Project 5' },
    { src: googleWildSwimming, alt: 'Project 6' },
  ];

  return (
    <Section id="projects" title="Recent Projects">
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam.
      </Text>
      <Box mt="8">
        <Carousel images={images} />
      </Box>
      <Button mt="4" colorScheme="teal">
        All Projects
      </Button>
    </Section>
  );
};
export default Projects;
