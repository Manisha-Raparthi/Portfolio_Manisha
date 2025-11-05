import Link from 'next/link'

export default function Header(){
  return (
    <header className="container">
      <div className="header">
        <Link href="/"><strong>MR</strong> · Portfolio</Link>
        <nav className="nav">
          <Link className="btn" href="/experience">Experience</Link>
          <Link className="btn" href="/skills">Skills</Link>

          <Link className="btn" href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
