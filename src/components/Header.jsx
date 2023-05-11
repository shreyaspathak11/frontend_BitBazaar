import React, { useState } from 'react';
import {
  Box,
  Flex,
  Button,
  Image,
  Text,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  IconButton,
  VStack,
  HStack,
  useColorMode,
  Switch,
  useColorModeValue,
  Avatar,
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import logo from '../assets/logo.png';

function Navbar() {
  const avatar = <Avatar size="sm" name="John Doe" src="https://bit.ly/dan-abramov" />
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue('#A7FFE4', 'gray.900');
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  // handle window resize to toggle isMobile state
  window.addEventListener("resize", () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  });

  return (
    <Flex align="center"  p={4} bgColor={bg} justifyContent={"space-between"} boxShadow={"xl"} textColor={textColor} borderColor={borderColor}>
      <Box>
      <Link to={"/"}>
        <Image src={logo} alt="logo" boxSize="50px" css={{ "&:hover": { transform: "scale(1.05)", boxShadow: "xl", }, }} />
      </Link>
        <Box> 
        <Text fontSize="sm" fontWeight="bold" fontFamily={"Alkatra"}>BitBazaar</Text>
        </Box>
      </Box>

      {/* Mobile view */}
      {isMobile ?
        <>
          
          <IconButton icon={ avatar } aria-label="Open menu" variant="ghost" onClick={onOpen} />
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody>
                <VStack spacing={4} align="stretch" fontFamily={"Alkatra"}>
                  <Button variant="ghost" onClick={onClose}><Link to="/home">Home</Link></Button>
                  <Button variant="ghost" onClick={onClose}><Link to="/coins">Coins</Link></Button>
                  <Button variant="ghost" onClick={onClose}><Link to="/exchanges">Exchange</Link></Button>
                  <Switch colorScheme="teal" isChecked={colorMode === "dark"} onChange={toggleColorMode} />
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
        :
        // Desktop view
        <>
        <HStack spacing={2} fontFamily={"Alkatra"}>
          <Button variant="ghost" size={"lg"}><Link to="/home">Home</Link></Button>
          <Button variant="ghost" size={"lg"}><Link to="/coins">Coins</Link></Button>
          <Button variant="ghost" size={"lg"}><Link to="/exchanges">Exchange</Link></Button>
          
        </HStack>
        <HStack ml={2}>
        <Avatar size="lg" name="John Doe" src="https://bit.ly/dan-abramov" />
          <Switch colorScheme="teal" isChecked={colorMode === "dark"} onChange={toggleColorMode} />
          </HStack>
        </>
      }

    </Flex>
  );
}

export default Navbar;