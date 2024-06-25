import React from 'react';
import { Box, Heading, Text, Image, VStack } from '@chakra-ui/react';

const MissingAlt = () => {
  return (
    <Box p={8}>
      <Heading mb={4}>Missing Alt Text Error</Heading>
      <VStack align="start" spacing={4}>
        <Text>This page demonstrates the issue of missing alt text on images:</Text>
        <Image src="https://via.placeholder.com/150" boxSize="150px" />
        <Text>The image above lacks alt text, making it inaccessible to screen readers and users with visual impairments.</Text>
      </VStack>
    </Box>
  );
};

export default MissingAlt;