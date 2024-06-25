import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Flex, Link } from '@chakra-ui/react';

const Navigation = () => {
  return (
    <Box bg="gray.100" py={4}>
      <Flex justifyContent="center" gap={4}>
        <Link as={RouterLink} to="/" fontWeight="bold">Home</Link>
        <Link as={RouterLink} to="/color-contrast">Color Contrast</Link>
        <Link as={RouterLink} to="/missing-alt">Missing Alt Text</Link>
        <Link as={RouterLink} to="/keyboard-trap">Keyboard Trap</Link>
        <Link as={RouterLink} to="/form-labels">Missing Form Labels</Link>
      </Flex>
    </Box>
  );
};

export default Navigation;