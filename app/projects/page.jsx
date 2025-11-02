import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/Section'

export default function ProjectsPage(){
  return (
    <main>
      <Header/>
      <div className="container">
        <h1>Projects</h1>
        <div className="card">
          <p>Add featured projects here (screenshots, links, tech stack, problem/solution/outcomes).</p>
        </div>
      </div>
      <Footer/>
    </main>
  )
}
