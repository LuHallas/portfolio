import { useNavigate, useLocation } from 'react-router-dom'

export default function Footer() {
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

  return (
    <footer className="footer">
      <div className="footer-logo">
        Hallas<span>.</span>Software
      </div>

      <p className="footer-copy">
        © 2025 Hallas Software. CNPJ 64.197.968/0001-32
      </p>

      <div className="footer-links">
        <a href="https://www.linkedin.com/company/hallas-software" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://www.instagram.com/hallas.software" target="_blank" rel="noreferrer">Instagram</a>
        <button onClick={() => irParaSecao('contato')}>Contato</button>
      </div>
    </footer>
  )
}