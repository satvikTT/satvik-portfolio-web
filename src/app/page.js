import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Internships from '../components/Internships'
import Certifications from '../components/Certifications'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      {<Skills />}
      {<Internships />}
      {<Certifications />}
      {<Contact />}
      {<Footer />}
    </>
  )
}
