import { Footer, Header, ScrollSection } from "@/components"
import { About, Contact, Home, Projects } from "@/features"

export const Mario = () => {
  return (
    <>
      <Header />

      <ScrollSection id="home">
        <Home />
      </ScrollSection>

      <ScrollSection id="about">
        <About />
      </ScrollSection>

      <ScrollSection id="projects">
        <Projects />
      </ScrollSection>

      <ScrollSection id="contact">
        <Contact />
      </ScrollSection>

      <Footer />
    </>
  )
}
