import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ExperienceItem from '@/components/ExperienceItem'
import Section from '@/components/Section'
import data from '@/data/resume'

export default function ExperiencePage(){
  return (
    <main>
      <Header/>
      <div className="container">
        <h1>Experience</h1>
        <div className="grid" style={{marginTop:12}}>
          {data.experience.map((j,i)=>(
            <ExperienceItem key={i} {...j} />
          ))}
        </div>
        <Section title="Education">
          <div className="card">
            <ul className="list">
              {data.education.map((e,i)=>(<li key={i}>{e}</li>))}
            </ul>
          </div>
        </Section>
      </div>
      <Footer/>
    </main>
  )
}
