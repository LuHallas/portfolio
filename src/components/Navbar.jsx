import { Link, useNavigate, useLocation } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  function irParaSecao(id) {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  function irParaTopo() {
    if (location.pathname !== '/') {
      navigate('/')
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <nav className="navbar">
      <Link to="/" className="logo" onClick={irParaTopo}>
        Hallas<span>.</span>Software
      </Link>

      <ul className="nav-links">
        <li><button onClick={() => irParaSecao('sobre')}>Sobre</button></li>
        <li><button onClick={() => irParaSecao('servicos')}>Serviços</button></li>
        <li><button onClick={() => irParaSecao('portfolio')}>Portfólio</button></li>
        <li><button onClick={() => irParaSecao('planos')}>Planos</button></li>
        <li><button onClick={() => irParaSecao('contato')}>Contato</button></li>
      </ul>

      <button className="nav-cta" onClick={() => irParaSecao('contato')}>
        Solicitar orçamento
      </button>
    </nav>
  )
}