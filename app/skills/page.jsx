import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import data from '@/data/resume'

export default function SkillsPage(){
  const s = data.skills
  return (
    <main>
      <Header/>
      <div className="container">
        <h1>Skills</h1>
        <div className="grid" style={{gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',marginTop:12}}>
          {Object.entries(s).map(([k,v])=> (
            <div className="card" key={k}>
              <h3 style={{marginBottom:6}}>{k}</h3>
              <div>{v.map(x => <span key={x} className="tag">{x}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </main>
  )
}
