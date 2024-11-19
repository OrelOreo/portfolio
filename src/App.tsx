import { Flex } from "@chakra-ui/react"
import About from "./components/About"
import CareerTimeline from "./components/CareerTimeline"
import Header from "./components/Header"
import Presentation from "./components/Presentation"
import ProjectCard from "./components/ProjectCard"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
function App() {

  return (
    <>
      <Header />
        <Flex as="main" width={{ base: "90%", md: "60%" }} flexDirection="column" justifyContent="center" alignItems="center" mx="auto" marginY="12" gapY={8}>
          <Presentation />
          <About />
          <ProjectCard />
          <CareerTimeline />
          <Contact />
          <Footer />
        </Flex>
    </>
  )
}

export default App
