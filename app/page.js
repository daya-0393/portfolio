import Layout from './components/layout'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'

export default function Home() {
  return (
    <Layout>
      <main>
        <Hero/>
        <About/>
        <Projects/>
        <Contact/>
      </main>
    </Layout>
  )
}
