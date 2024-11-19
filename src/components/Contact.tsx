import { Box, Button, Flex, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" >
      <VStack spaceY={4} textAlign="center">
        <Heading as="h3" size="4xl" mb="4">Rester en contact</Heading>
        <Text as="p" mb="4">
            Je me spécialise actuellement dans le
            <Text as="span" color="purple.400">
                &nbsp; Développement Front-End
            </Text>
        </Text>
        <Text as="p">
            N'hésitez pas à me contacter.
        </Text>
        <Flex
          direction={{ base: "column", md: "row" }}
          gap="4" 
          alignItems="center"
          justifyContent="center"
          width="100%">
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
      </VStack>
    </Box>
  );
}

export default Contact;