import Header from "./components/Header/header.tsx"
import Cabecalho from "./components/Cabecalho/cabecalho.tsx"
import Formation from "./components/Formation/formation.tsx"
import Skills from "./components/Skills/skills.tsx"
import Projects from "./components/Projects/projects.tsx"
import About from "./components/About/about.tsx"
import Contact from "./components/Contact/contact.tsx"
import "./App.css"

function App() {
  return (
    <div>
      <div className="background">
        <Header />
        <Cabecalho />
        <main>
          <Formation />
          <Skills />
          <Projects />
          <About />
          <Contact />
        </main>
      </div>
    </div>
  )
}

export default App

