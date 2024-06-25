import React from 'react';
import { Box, Heading, Text, Input, VStack } from '@chakra-ui/react';

const FormLabels = () => {
  return (
    <Box p={8}>
      <Heading mb={4}>Missing Form Labels Error</Heading>
      <VStack align="start" spacing={4}>
        <Text>This page demonstrates the issue of missing form labels:</Text>
        <Box>
          <Input placeholder="Name" aria-label="Name" />
        </Box>
        <Box>
          <Input placeholder="Email" />
        </Box>
        <Text>The second input field above lacks a proper label, making it difficult for screen reader users to understand its purpose.</Text>
      </VStack>
    </Box>
  );
};

export default FormLabels;