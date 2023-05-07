import React, { useState } from 'react';
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Input,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add code to submit email to newsletter API or database
    setIsSubscribed(true);
  };

  const bgGradient = useColorModeValue('linear(to-r, teal.200, green.200)', 'gray.700');
  const textColor = useColorModeValue('Teal', 'white');
  const bg = useColorModeValue('linear(to-r, teal.200, green.200)', 'gray.800');

  return (

    <Flex
      direction="column"
      justify="center"
      align="center"
      minH="100vh"
      bgGradient={bgGradient}
    >
      <Box
        w="100%"
        maxW="sm"
        bg="white"
        p={8}
        borderRadius="lg"
        boxShadow="lg" 
        textColor={textColor}
        bgColor={bg}
      >
        <Center mb={6}>
          <Heading size="lg" fontWeight="bold">
            Subscribe to our Newsletter
          </Heading>
        </Center>
        {!isSubscribed ? (
          <form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
              mb={4}
            />
            <Button type="submit" colorScheme="teal" size="md" mb={4}>
              Subscribe
            </Button>
          </form>
        ) : (
          <Center flexDirection="column">
            <Text mb={2} fontSize="lg">
              You are subscribed to our newsletter. Enjoy!
            </Text>
            <Box w={8} h={8} bg="blue.500" borderRadius="full" />
          </Center>
        )}
      </Box>
    </Flex>
  );
}

export default Newsletter;
