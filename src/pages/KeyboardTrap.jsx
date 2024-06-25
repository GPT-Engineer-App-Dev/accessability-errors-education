import React, { useState } from 'react';
import { Box, Heading, Text, Button, Input, VStack } from '@chakra-ui/react';

const KeyboardTrap = () => {
  const [isTrapActive, setIsTrapActive] = useState(false);

  const handleTrapToggle = () => {
    setIsTrapActive(!isTrapActive);
  };

  return (
    <Box p={8}>
      <Heading mb={4}>Keyboard Trap Error</Heading>
      <VStack align="start" spacing={4}>
        <Text>This page demonstrates a keyboard trap:</Text>
        <Button onClick={handleTrapToggle}>
          {isTrapActive ? 'Deactivate' : 'Activate'} Keyboard Trap
        </Button>
        {isTrapActive && (
          <Box border="1px solid" borderColor="red.500" p={4}>
            <Text mb={2}>You're now in a keyboard trap. You can't tab out of this box:</Text>
            <Input placeholder="Trapped input" onKeyDown={(e) => e.preventDefault()} />
          </Box>
        )}
        <Text>Keyboard traps prevent users from navigating away from an element using only the keyboard, which is a significant accessibility issue.</Text>
      </VStack>
    </Box>
  );
};

export default KeyboardTrap;