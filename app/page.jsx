import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import data from '@/data/resume'
import Image from "next/image"

export default function Page(){
  return (
    <main>
      <Header/>
      <div className="container">
        <div className="card">
          <div className="hero">
            <div className="left">
              <h1>{data.name}</h1>
              <p className="muted">{data.title}</p>
              <div className="kv">
                <div className="k">Email</div><div className="v"><a href={`mailto:${data.email}`}>{data.email}</a></div>
                <div className="k">Phone</div><div className="v"><a href={`tel:${data.phone.replace(/[^+\d]/g,'')}`}>{data.phone}</a></div>
                <div className="k">LinkedIn</div><div className="v"><a href={data.linkedin} target="_blank">https://www.linkedin.com/in/r-manisha-86b8b4390</a></div>
                <div className="k">GitHub</div><div className="v"><a href={data.github} target="_blank">https://github.com/Manisha-Raparthi</a></div>
              </div>
              <div style={{marginTop:12}}>
                <a className="btn" href="/experience">View Experience →</a>
                <a className="btn" href="/skills" style={{marginLeft:8}}>Skills →</a>
              </div>
            </div>
            
              
              <div  className="right" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Image
                          src="/profile.jpg"
                          alt="Manisha Raparthi"
                          width={160}
                          height={80}
                          style={{ borderRadius: "50%", marginBottom: "1rem", border: "2px solid rgba(255,255,255,0.15)" }}
                        />
                        </div>
                        </div>
           
        </div>

        <Section title="Summary">
          <div className="card">{data.summary}</div>
        </Section>
      </div>
      <Footer/>
    </main>
  )
}
