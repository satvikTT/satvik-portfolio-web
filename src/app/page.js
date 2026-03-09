import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Internships from '../components/Internships'
import Certifications from '../components/Certifications'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Achievement from '../components/Achievement'
import Education from '../components/Education'
import ThemeToggle from '../components/ThemeToggle'
import CustomCursor from '../components/CustomCursor'

export default function Home() {
  return (
    <>
      <Hero />
      <ThemeToggle />
      <CustomCursor />
      {<Achievement />}
      {<Education />}
      {<Projects />}
      {<Skills />}
      {<Internships />}
      {<Certifications />}
      {<Contact />}
      {<Footer />}
    </>
  )
}
