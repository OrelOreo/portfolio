import { Box, Card, Link } from "@chakra-ui/react"
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
    return (
      <Box ref={ref} id="Career">
            <TimelineRoot id="parcours" size="xl" variant="outline">
                <TimelineItem>
                    <TimelineContent flex="1" />
                    <TimelineConnector>
                        <CiCalendarDate />
                    </TimelineConnector>
                    <TimelineContent flex="1">
                    <TimelineTitle>Développeur Web Full-Stack</TimelineTitle>
                    <Card.Root size="sm">
                      <Card.Body textStyle="sm" lineHeight="tall">
                        <p>Durant cette période j'ai principalement travaillé sur une deuxième version de la partie Front-End du projet <Link href="https://lecompteasso.associations.gouv.fr/" target="_blank" color="purple.400" variant="underline">Le Compte Asso</Link></p>
                      </Card.Body>
                    </Card.Root>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineContent flex="1" alignItems="flex-end">
                    <TimelineTitle>Alternance Développeur Web</TimelineTitle>
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
                      <TimelineTitle>Prep'Apprentissage Openclassrooms</TimelineTitle>
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