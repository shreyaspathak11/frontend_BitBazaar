import React from 'react';
import {
  Box,
  Container,
  Text,
  Flex,
  Stack,
  IconButton,

  useColorModeValue,
} from '@chakra-ui/react';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  

  const bg = useColorModeValue('#A5F1E9', 'gray.900');
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box bg={bg} color={textColor} borderTopWidth="1px" borderColor={borderColor} fontFamily={"Alkatra"}>
      <Container as={Flex} maxW="7xl" py="6" direction={{ base: 'column', md: 'row' }}>
        <Box flex="1">
          <Text fontSize="sm" fontWeight="bold">
            &copy; {new Date().getFullYear()} BitBazaar. All rights reserved.
          </Text>
          <Stack mt={2} direction="row" spacing={4}>
            <Link to="/coins">
              <Text fontSize="lg" _hover={{ color: 'white', transform: "scale(1.05)",boxShadow: "xl" }}>
                Coins
              </Text>
            </Link>
            <Link to="/exchanges">
              <Text fontSize="lg" _hover={{ color: 'White', transform: "scale(1.05)",boxShadow: "xl" }}>
                Exchanges
              </Text>
            </Link>
          </Stack>
        </Box>

        <Stack direction="row" spacing={4} ml="auto">
            <Text >Follow us on:</Text>
          <IconButton
            aria-label="Twitter"
            icon={<FaTwitter />}
            size="md"
            variant="ghost"
            _hover={{ bg: "white", color: "teal.500", transform: "scale(1.05)",boxShadow: "xl"}}
            onClick={() => window.open('https://twitter.com/')}
          />
          <IconButton
            aria-label="Instagram"
            icon={<FaInstagram />}
            size="md"
            variant="ghost"
            _hover={{ bg: "white", color: "teal.500", transform: "scale(1.05)",boxShadow: "xl"}}
            onClick={() => window.open('https://www.instagram.com/')}
          />
          <IconButton
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            size="md"
            variant="ghost"
            _hover={{ bg: "white", color: "teal.500", transform: "scale(1.05)",boxShadow: "xl"}}
            onClick={() => window.open('https://www.linkedin.com/')}
          />
          <Stack direction="column" spacing={0} justify="center">
            <Text fontSize="lg">Stay up to date</Text>
            <Box
              as={Link}
              to="/subscribe"
              rounded="full"
              bg="blue.500"
              color="white"
              px="4"
              py="1"
              _hover={{ bg: 'blue.600' }}
              fontSize="sm"
              fontWeight="bold"
              textAlign="center"
              transition="0.2s"
              css={{"&:hover": { transform: "scale(1.05)",boxShadow: "xl" }}}
            >
            <Link to="./newsletter">
              Subscribe
              </Link>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
