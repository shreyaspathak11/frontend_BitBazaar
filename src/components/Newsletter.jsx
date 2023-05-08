import React, { useState } from 'react';
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Input,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import image1 from '../assets/newsletter.png';

function Newsletter() {
  
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };



    async function registerMember(event) {
      event.preventDefault()
  
      const response = await fetch('http://localhost:5000/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email
        }),
      })

      const data = await response.json()
      if (data.status === 'ok') {
    setIsSubscribed(true);
      }
      else if (data.status === 'error') {
        alert('Already Subscribed!')
        
      }
  };

  const bgGradient = useColorModeValue('linear(to-r, teal.200, green.200)', 'gray.700');
  const textColor = useColorModeValue('Teal', 'white');
  
  return (

    <Flex
      direction="column"
      justify="center"
      align="center"
      minH="100vh"
      bgGradient={bgGradient}
      fontFamily={"Alkatra"}
    >
      
      <Box
        w="100%"
        maxW="md"
        bg="white"
        p={8}
        borderRadius="lg"
        boxShadow="lg" 
        textColor={textColor}        
      >
      
      <Center mb={6}>
      <Image src={image1} alt="newsletter" alignContent={"center"} mb={6} ml={30} mr={6} mt={6} />
      </Center>
        <Center mb={6}>
          <Heading size="lg" fontWeight="bold" fontFamily={"Alkatra"}>
            Subscribe to our Newsletter
          </Heading>
        </Center>
        

        {!isSubscribed ? (
          <form onSubmit={registerMember}>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
              mb={4}
              textColor={"gray.700"}
            />
            <Button type="submit" colorScheme="teal" size="md" mb={4} _hover={{ transform: "scale(1.05)", boxShadow:"3xl"}}>
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
