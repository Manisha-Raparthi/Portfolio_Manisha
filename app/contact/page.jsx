import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import data from '@/data/resume'
import Image from "next/image"

export default function ContactPage(){
  return (
    <main>
      <Header/>
      <div className="container">
        <h1>Contact</h1>
        <div className="card" style={{textAlign: "center"}}>
          <Image
            src="/profile.jpg"
            alt="Manisha Raparthi"
            width={160}
            height={160}
            style={{ borderRadius: "50%", marginBottom: "1rem", border: "2px solid rgba(255,255,255,0.15)" }}
          />
          
          <p>Email: <a href={`mailto:${data.email}`}>{data.email}</a></p>
          <p>LinkedIn: <a href={data.linkedin} target="_blank" rel="noopener noreferrer">{data.linkedin}</a></p>
          <p>GitHub: <a href={data.github} target="_blank" rel="noopener noreferrer">{data.github}</a></p>
        </div>
      </div>
      <Footer/>
    </main>
  )
}
