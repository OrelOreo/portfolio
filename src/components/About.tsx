import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";

function About() {
  return (
    <Flex 
      width="100%" 
      justifyContent="space-between" 
      alignItems="center" 
      direction={{ base: "column", md: "row" }}
      gap="6"
    >
      <Box width={{ base: "90%", md: "60%" }} textAlign={{ base: "center", md: "left" }}>
        <Heading as="h3" size="xl" mb="4">⚡ A Propos</Heading>
        <Text as="p" mb="4">
          Salut ! Je suis Aurélien, j'ai été proche d'un ordinateur depuis mon plus jeune âge et j'en suis passionné depuis.
        </Text>
        <Text as="p" mb="4">
          Actuellement développeur full-stack, je suis particulièrement passionné par la création de projets innovants avec du code et l'automatisation des tâches. Je me concentre actuellement sur le développement front-end.
        </Text>
        <Text as="p">
          Quand je ne code pas, je passe mon temps à jouer à des jeux avec mes amis, à regarder des vidéos sur l'astronomie ✨ ou à jouer de la guitare ! 🎸
        </Text>
      </Box>
      <Image 
        src="profile.jpeg" 
        borderRadius="full" 
        fit="cover" 
        alt="Photo de profil" 
        boxSize={{ base: "40", md: "60" }}
        mt={{ base: "4", md: "0" }} 
      />
    </Flex>
  );
}

export default About;
