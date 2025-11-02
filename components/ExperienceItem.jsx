export default function ExperienceItem({ role, company, dates, bullets, environment, project }){
  return (
    <article className="card" style={{padding:'16px'}}>
      <div style={{display:'flex',justifyContent:'space-between',gap:16,alignItems:'baseline'}}>
        <div>
          <h3 style={{marginBottom:2}}>{role}</h3>
          <div className="muted">{company}</div>
        </div>
        <div className="muted">{dates}</div>
      </div>
      {project && <p style={{margin:'8px 0'}}>{project}</p>}
      {Array.isArray(bullets) && bullets.length>0 && (
        <ul className="list">
          {bullets.map((b,i)=>(<li key={i}>{b}</li>))}
        </ul>
      )}
      {environment && <p style={{marginTop:8}}><strong>Environment:</strong> {environment}</p>}
    </article>
  )
}
