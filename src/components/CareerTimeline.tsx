import { Box, Card, Heading, Link } from "@chakra-ui/react"
import { CiCalendarDate } from "react-icons/ci";

import {
    TimelineConnector,
    TimelineContent,
    TimelineItem,
    TimelineRoot,
    TimelineTitle,
  } from "../components/ui/timeline"
import { forwardRef } from "react";

const CareerTimeline = forwardRef<HTMLDivElement> ((_, ref) => {

  const currentYear = new Date().getFullYear();

    return (
      <Box ref={ref} id="Career">
            <Heading as="h3" size="xl" mb="8" textAlign="center">Parcours</Heading>
            <TimelineRoot id="parcours" size="xl" variant="outline">
                <TimelineItem>
                    <TimelineContent flex="1" />
                    <TimelineConnector>
                        <CiCalendarDate />
                    </TimelineConnector>
                    <TimelineContent flex="1">
                    <TimelineTitle>Développeur Web Full-Stack (2024 - {currentYear})</TimelineTitle>
                    <Card.Root size="sm">
                      <Card.Body textStyle="sm" lineHeight="tall">
                        <p>Durant cette période j'ai principalement travaillé sur une deuxième version de la partie Front-End du projet <Link href="https://lecompteasso.associations.gouv.fr/" target="_blank" color="purple.400" variant="underline">Le Compte Asso</Link></p>
                      </Card.Body>
                    </Card.Root>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineContent flex="1" alignItems="flex-end">
                    <TimelineTitle>Alternance Développeur Web (2023 - 2024)</TimelineTitle>
                    <Card.Root size="sm">
                      <Card.Body textStyle="sm" lineHeight="tall">
                      <p>Lors de mon alternance en tant que développeur web, j'ai principalement travaillé sur une deuxième version de la Front-End de <Link href="https://www.data-asso.fr/" target="_blank" color="purple.400" variant="underline">Data-Asso</Link>. J'ai contribué à la conception, à la programmation JavaScript avec le framework Nuxt.js</p>
                    </Card.Body>
                  </Card.Root>
                    </TimelineContent>
                    <TimelineConnector>
                        <CiCalendarDate />
                    </TimelineConnector>
                    <TimelineContent flex="1" />
                </TimelineItem>

                <TimelineItem>
                    <TimelineContent flex="1" />
                    <TimelineConnector>
                        <CiCalendarDate />
                    </TimelineConnector>
                    <TimelineContent flex="1">
                      <TimelineTitle>Prep'Apprentissage Openclassrooms (2022 - 2023)</TimelineTitle>
                      <Card.Root size="sm">
                        <Card.Body textStyle="sm" lineHeight="tall">
                          <p>Initiation au métier de développeur web en réalisant un projet avec HTML / CSS</p>
                        </Card.Body>
                      </Card.Root>
                    </TimelineContent>
                </TimelineItem>
          </TimelineRoot>
    </Box>
    )
})

export default CareerTimeline