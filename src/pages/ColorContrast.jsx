import React from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const ColorContrast = () => {
  return (
    <Box p={8}>
      <Heading mb={4}>Color Contrast Error</Heading>
      <VStack align="start" spacing={4}>
        <Text>This page demonstrates poor color contrast, which can make text difficult to read:</Text>
        <Box bg="yellow.200" p={4}>
          <Text color="yellow.400" fontSize="lg">This text has poor contrast with its background.</Text>
        </Box>
        <Text>Good color contrast is essential for readability, especially for users with visual impairments.</Text>
      </VStack>
    </Box>
  );
};

export default ColorContrast;