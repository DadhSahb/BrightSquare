import React from 'react';
import { ChakraProvider, Box, VStack } from '@chakra-ui/react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/HeroComponent';
import About from '../../components/About';
import Capabilities from '../../components/Capabilities';
import Projects from '../../components/Projects';
import Reviews from '../../components/Reviews';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

function Home() {
  return (
    <ChakraProvider>
      <Box>
        <Navbar />
        <Hero />
        <VStack spacing="16" pt="20">
          <About />
          <Capabilities />
          <Projects />
          <Reviews />
          <Contact />
        </VStack>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default Home;
