import { Header } from './components/Header.jsx'
import { Hero } from './components/Hero.jsx'
import { Experience } from './components/Experience.jsx'
import { Projects } from './components/Projects.jsx'
import { Skills } from './components/Skills.jsx'
import { Credentials } from './components/Credentials.jsx'
import { Education } from './components/Education.jsx'
import { Contact } from './components/Contact.jsx'
import { Footer } from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-ink dark:text-white">
      <Header />
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-14 px-4 pb-16 pt-8 sm:gap-16 sm:px-6 sm:pt-12">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Credentials />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
