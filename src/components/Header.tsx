import { Box, Flex, Link, HStack, Button, IconButton, useDisclosure, VStack, Text } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { TScrollToSection } from "../App";

type THeaderProps = {
  scrollIntoView: (ref: TScrollToSection) => void;
};


function Header({ scrollIntoView }: THeaderProps) {
  const { open, onOpen, onClose } = useDisclosure();

  return (
    <header>
      <Box bg="transparent" w="100%" p="4" color="white">
        <Flex
          as="nav"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          maxW={{ base: "100%", md: "60%" }}
          mx="auto"
          pb="2.5"
          borderBottomWidth="1px"
          borderBottomColor="gray.800"
        >
          <Button as="div" variant="ghost">
            <Link href="/" _hover={{ textDecoration: 'none' }}>
              <Text textStyle="3xl">
                <Text as="span" color="gray.400">{'{'}&nbsp;</Text>
                  A
                <Text as="span" color="gray.400">&nbsp;{'}'}</Text>
              </Text>
            </Link>
          </Button>

          <HStack as="div" spaceX={4} display={{ base: "none", md: "flex" }}>
            <Link
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollIntoView('Home'); onClose(); }}
              _hover={{ textDecoration: 'none', bg: 'gray.700' }}
              px={4}
              py={2}
              borderRadius="md"
              display="inline-block"
              tabIndex={0}
              role="button"
            >
              <Text textStyle="lg">Accueil</Text>
            </Link>
            <Link
              href="#projects"
              onClick={(e) => { e.preventDefault(); scrollIntoView('Projects'); onClose(); }}
              _hover={{ textDecoration: 'none', bg: 'gray.700' }}
              px={4}
              py={2}
              borderRadius="md"
              display="inline-block"
              tabIndex={0}
              role="button"
            >
              <Text textStyle="lg">Projets</Text>
            </Link>
            <Link
              href="#career"
              onClick={(e) => { e.preventDefault(); scrollIntoView('Career'); onClose(); }}
              _hover={{ textDecoration: 'none', bg: 'gray.700' }}
              px={4}
              py={2}
              borderRadius="md"
              display="inline-block"
              tabIndex={0}
              role="button"
            >
              <Text textStyle="lg">Parcours</Text>
            </Link>
          </HStack>

          <IconButton
            aria-label="Menu"
            variant="ghost"
            display={{ base: "flex", md: "none" }}
            onClick={open ? onClose : onOpen}
          >
            {!open ? <GiHamburgerMenu /> : <IoClose />}
          </IconButton>


          {open && (
            <Box
              pos="absolute"
              top="64px"
              left="0"
              w="100%"
              bg="black"
              borderBottomWidth="1px"
              borderBottomColor="gray.400"
              color="white"
              zIndex="dropdown"
              display={{ md: "none" }}
              p={4}
            >
              <VStack spaceY={4} align="start" pl={2}>
                <Link
                  href="#home"
                  onClick={(e) => { e.preventDefault(); scrollIntoView('Home'); onClose(); }}
                  _hover={{ textDecoration: 'none', bg: 'gray.700' }}
                  px={4}
                  py={2}
                  borderRadius="md"
                  display="inline-block"
                  tabIndex={0}
                  role="button"
                >
                  <Text textStyle="lg">Accueil</Text>
                </Link>
                <Link
                  href="#projects"
                  onClick={(e) => { e.preventDefault(); scrollIntoView('Projects'); onClose(); }}
                  _hover={{ textDecoration: 'none', bg: 'gray.700' }}
                  px={4}
                  py={2}
                  borderRadius="md"
                  display="inline-block"
                  tabIndex={0}
                  role="button"
                >
                  <Text textStyle="lg">Projets</Text>
                </Link>
                <Link
                  href="#career"
                  onClick={(e) => { e.preventDefault(); scrollIntoView('Career'); onClose(); }}
                  _hover={{ textDecoration: 'none', bg: 'gray.700' }}
                  px={4}
                  py={2}
                  borderRadius="md"
                  display="inline-block"
                  tabIndex={0}
                  role="button"
                >
                  <Text textStyle="lg">Parcours</Text>
                </Link>
              </VStack>
            </Box>
          )}
        </Flex>
      </Box>
    </header>
  );
}

export default Header;
