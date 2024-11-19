import { Box, Flex, Link, HStack, Button, IconButton, useDisclosure, VStack, Text } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
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
            <Button as="div" variant="ghost">
              <Link href="/" _hover={{ textDecoration: 'none' }} >
                <Text textStyle="lg">Accueil</Text>
              </Link>
            </Button>
            <Button as="div" variant="ghost">
              <Link href="#projets" _hover={{ textDecoration: 'none' }}>
                <Text textStyle="lg">Projets</Text>
              </Link>
            </Button>
            <Button as="div" variant="ghost">
              <Link href="#parcours" _hover={{ textDecoration: 'none' }}>
                <Text textStyle="lg">Parcours</Text>
              </Link>
            </Button>
          </HStack>

          <IconButton
            aria-label="Menu"
            variant="ghost"
            display={{ base: "flex", md: "none" }}
            onClick={open ? onClose : onOpen}
          >
            <GiHamburgerMenu />
          </IconButton>

          {open && (
            <Box
              pos="absolute"
              top="64px"
              left="0"
              w="90%"
              bg="transparent"
              color="white"
              zIndex="dropdown"
              display={{ md: "none" }}
              p={4}
            >
              <VStack spaceY={4} align="start" pl={2}>
                <Button as="div" variant="ghost">
                    <Link href="/" _hover={{ textDecoration: 'none' }}>
                        <Text textStyle="lg">Accueil</Text>
                    </Link>
                </Button>
                <Button onClick={onClose} as="div" variant="ghost">
                    <Link href="#projets" _hover={{ textDecoration: 'none' }}>
                        <Text textStyle="lg">Projets</Text>
                    </Link>
                </Button>
                <Button onClick={onClose} as="div" variant="ghost">
                    <Link href="#parcours" _hover={{ textDecoration: 'none' }}>
                        <Text textStyle="lg">Parcours</Text>
                    </Link>
                </Button>
              </VStack>
            </Box>
          )}
        </Flex>
      </Box>
    </header>
  );
}

export default Header;
