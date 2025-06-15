import { Flex } from "@chakra-ui/react"
import About from "./components/About"
import CareerTimeline from "./components/CareerTimeline"
import Header from "./components/Header"
import Presentation from "./components/Presentation"
import ProjectCard from "./components/ProjectCard"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { useRef } from "react"

export type TScrollToSection = 'Home' | 'Projects' | 'Career';

function App() {

  const projectsRef = useRef<HTMLDivElement>(null);
  const careerRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: TScrollToSection) => {
    console.log(ref);
    switch (ref) {
      case 'Home':
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'Projects':
        projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Career':
        careerRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <div id="Home">
      <Header scrollIntoView={scrollToSection} />
        <Flex as="main" width={{ base: "90%", md: "60%" }} flexDirection="column" justifyContent="center" alignItems="center" mx="auto" marginY="12" gapY={8}>
          <Presentation />
          <About />
          <ProjectCard ref={projectsRef}/>
          <CareerTimeline ref={careerRef} />
          <Contact />
          <Footer />
        </Flex>
    </div>
  )
}

export default App
