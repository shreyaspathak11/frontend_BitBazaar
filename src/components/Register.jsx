import React, {useState} from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Link,
  Button,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { useNavigate } from "react-router-dom"

const Register = () => {
  const bgGradient = useColorModeValue('linear(to-r, teal.200, green.200)', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'white');
  const bg = useColorModeValue('white', 'gray.800');

      const navigate = useNavigate()

      const [firstName, setFirstName] = useState('')
      const [lastName, setLastName] = useState('')
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
    
      async function registerUser(event) {
        event.preventDefault()
    
        const response = await fetch('http://localhost:5000/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            password,
          }),
        })
    
        const data = await response.json()
    
        if (data.status === 'ok') {
          navigate('/login')
        }
      }


  return (
    <Flex align="center" justify="center" minH="100vh" bgGradient={bgGradient}>
      <Box
        maxW={{ base: '90%', md: '80%' }}
        borderWidth="1px"
        borderRadius="lg"
        p="6"
        bg={bg}
        boxShadow="md"
        textColor={textColor}
      >
        <Box mb="6" textAlign="center">
          <Heading size="lg" fontWeight="bold" textColor={"teal.500"}>
            Register
          </Heading>
          <Text fontSize="sm">Please fill in the form to create your account.</Text>
        </Box>
        <form>
          <FormControl id="firstName" isRequired>
            <FormLabel>First Name</FormLabel>
            <Input type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Shreyas" />
          </FormControl>
          <FormControl id="lastName" mt="4" isRequired>
            <FormLabel>Last Name</FormLabel>
            <Input  type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Pathak"  />
          </FormControl>
          <FormControl id="email" mt="4" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="shreyas@example.com"  />
          </FormControl>
          <FormControl id="password" mt="4" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" name='password' placeholder="********" onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <FormControl mt="4" display="flex" alignItems="center">
            <Checkbox defaultIsChecked>
              I agree to the{' '}
              <Link color="teal.500" href="./terms" >
                Terms and Conditions
              </Link>
            </Checkbox>
          </FormControl>
          <Button colorScheme="teal" size="lg" mt="6" w="100%" type="submit" onClick={registerUser} >
            Register
          </Button>
        </form>
        <Text mt="8" textAlign="center" fontWeight="bold">
          OR
        </Text>
        <VStack align="center" justify="center" mt="6">
          <Button
            leftIcon={<FaFacebook />}
            colorScheme="facebook"
            size="lg"
            variant="outline"
            fontWeight="medium"
          >
            Register with Facebook
          </Button>
          <Button
            leftIcon={<FaGoogle />}
            colorScheme="red"
            size="lg"
            fontWeight="medium"
            variant="outline"
          >
            Register with Google
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Register;
