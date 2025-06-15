import { Link, Button, Text, Heading, Box, Flex } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function Presentation() {

  return (
    <Box width="100%">
        <Text color="purple.400" fontWeight="bolder">Hey ! Je suis-</Text>
        <Heading as="h1" size="6xl">Aurélien Oger.</Heading>
        <Heading as="h2" size="4xl" color="gray.500">
          <Text as="span" color="white">
            Développeur web.
          </Text>
            &nbsp; Basé en Île-de-France
        </Heading>
        <Box my={4}>
          <Text>
            ⚡ Développeur Full-Stack à &nbsp; 
            <Link variant="underline" color="purple.400" href="https://www.synaltic.fr" target="_blank" >
             Synaltic
            </Link>
          </Text>
        </Box>
        <Flex
          direction={{ base: "column", md: "row" }}
          gap="4" 
          alignItems="center">
          <Button as="div" variant="subtle" color="purple.400" width={{ base: "100%", md: "auto" }} fontSize={{ base: "sm", md: "md" }}>
              <FaGithub />
              <Link href="https://github.com/OrelOreo" target="_blank" _hover={{ textDecoration: 'none' }}>
                <Text textStyle="lg">Github</Text>
              </Link>
          </Button>
          <Button as="div" variant="subtle" color="purple.400" width={{ base: "100%", md: "auto" }} fontSize={{ base: "sm", md: "md" }}>
              <FaLinkedin />
              <Link href="https://www.linkedin.com/in/aurelien-oger/" target="_blank" _hover={{ textDecoration: 'none' }}>
                <Text textStyle="lg">LinkedIn</Text>
              </Link>
          </Button>
          <Button as="div" variant="subtle" color="purple.400" width={{ base: "100%", md: "auto" }} fontSize={{ base: "sm", md: "md" }}>
              <MdEmail />
              <Link href="mailto:aurelien94700@gmail.com" _hover={{ textDecoration: 'none' }}>
                <Text textStyle="lg">Email</Text>
              </Link>
          </Button>
        </Flex>
    </Box>
  );
}

export default Presentation;
