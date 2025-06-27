import { Box, Image, Text, Link, Flex, Heading } from "@chakra-ui/react";
import { Tag } from "../components/ui/tag"
import { SiNuxtdotjs, SiTypescript, SiDocker, SiElasticsearch, SiNodedotjs, SiMongodb, SiTailwindcss, SiPostgresql, SiAdonisjs } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { forwardRef } from "react";



const ProjectCard = forwardRef<HTMLDivElement>((_, ref) => { {

  const projects = [
    {
        title: 'Pass Sport',
        description: 'Pass Sport est une aide financière de 70 € pour les jeunes de 14 à 30 ans, destinée à faciliter l’accès à la pratique sportive.',
        image: 'passsport.png',
        alt: 'pass sport site',
        url: 'https://www.pass.sports.gouv.fr/',
        technos: [
          {
            title: 'Nuxt.js',
            icon: <SiNuxtdotjs />,
            color: 'green',
          },
          {
            title: 'Tailwind CSS',
            icon: <SiTailwindcss />,
            color: 'cyan',
          },
          {
            title: 'Node.js',
            icon: <SiNodedotjs />,
            color: 'green',
          },
          {
            title: 'Docker',
            icon: <SiDocker />,
            color: 'cyan'
          },
          {
            title: 'PostgreSQL',
            icon: <SiPostgresql />,
            color: 'cyan'
          },
          {
            title: 'AdonisJS',
            icon: <SiAdonisjs />,
            color: 'purple'
          }
        ]
    },
    {
        title: 'Data-Asso',
        description: 'Data-Asso permet en quelques clics de découvrir la richesse et la diversité du monde associatif en France parmi plus de 3 millions d\'associations référencées.',
        image: 'data-asso.png',
        alt: 'data-asso site',
        url: 'https://www.data-asso.fr/',
        technos: [
          {
            title: 'Nuxt.js',
            icon: <SiNuxtdotjs />,
            color: 'green',
          },
          {
            title: 'Tailwind CSS',
            icon: <SiTailwindcss />,
            color: 'cyan',
          },
          {
            title: 'Node.js',
            icon: <SiNodedotjs />,
            color: 'green',
          },
          {
            title: 'Docker',
            icon: <SiDocker />,
            color: 'cyan'
          },
          {
            title: 'Elasticsearch',
            icon: <SiElasticsearch />,
            color: 'green'
          }
        ]
    },
    {
        title: 'Le Compte Asso',
        description: 'Le Compte Asso permet aux associations d’accéder à de nombreux services et d’effectuer une partie de leurs démarches administratives, de manière entièrement simplifiée.',
        image: 'lecompteasso.png',
        alt: 'lecompteasso site',
        url: 'https://lecompteasso.associations.gouv.fr/',
        technos: [
          {
            title: 'TypeScript',
            icon: <SiTypescript />,
            color: 'cyan'
          },
          {
            title: 'Next.js',
            icon: <RiNextjsFill/>,
            color: 'gray'
          },
          {
            title: 'Node.js',
            icon: <SiNodedotjs />,
            color: 'green',
          },
          {
            title: 'MongoDB',
            icon: <SiMongodb />,
            color: 'green',
          },
          {
            title: 'Docker',
            icon: <SiDocker />,
            color: 'cyan'
          }
        ]
    }
]

  return (
    <Box ref={ref} width="100%" id="Projects">
      <Heading as="h3" size="xl">Tous travaux créatifs</Heading>
      <Text>Voici quelques projets sur lesquels j'ai travaillé.</Text>
      <Flex direction="column" justifyContent="center" align="center" gapY={8} my={8}>
        {projects.map((project, index) => (
          <Link key={index} href={project.url} target="_blank" _hover={{ textDecoration: "none" }} width="100%">
          <Box
            width="100%"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.05)" }}
          >
            {/* Image du projet */}
            <Image
              src={project.image}
              alt="Projet Image"
              objectFit="cover"
              w="100%"
              h={{ base: "180px", md: "440px" }}
            />

            {/* Contenu de la description */}
            <Box p="4">
              <Text fontWeight="bold" fontSize="lg">
                  {project.title}
              </Text>
                <Flex direction="row" wrap="wrap" gap={2} my={4} >
                {
                  project.technos.map((techno, index) => (
                      <Tag key={index} colorPalette={techno.color} startElement={techno.icon}>
                          {techno.title}
                      </Tag>
                  ))
                }
              </Flex>
              <hr className="chakra-divider" />
              <Text fontSize="md" mt={4}>
                  {project.description}
              </Text>
            </Box>
            
          </Box>
        </Link>
        ))}
      </Flex>
    </Box>
  );
}});

export default ProjectCard;
