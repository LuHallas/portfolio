import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { projetos } from '../data/projetos'
import Carrossel from '../components/Carrossel'

export default function Projeto() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const projeto = projetos.find(p => p.slug === slug)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug])

  useEffect(() => {
    const els = document.querySelectorAll('.fade-up')
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('show'), i * 60)
        }
      })
    }, { threshold: 0.08 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [slug])

  if (!projeto) {
    navigate('/')
    return null
  }

  const index = projetos.findIndex(p => p.slug === slug)
  const anterior = projetos[index - 1] || null
  const proximo  = projetos[index + 1] || null

  return (
    <main>
      <ProjetoHero projeto={projeto} navigate={navigate} />
      <NavBar anterior={anterior} proximo={proximo} navigate={navigate} />
      <Desafio projeto={projeto} />
      <StackTec projeto={projeto} />
      <Resultados projeto={projeto} />
      <ProjetoCTA navigate={navigate} />
    </main>
  )
}

/* ── HERO DO PROJETO ── */
function ProjetoHero({ projeto, navigate }) {
  const gradientes = {
    blue:   'linear-gradient(140deg,#eff6ff,#dbeafe)',
    rose:   'linear-gradient(140deg,#fff1f2,#fecdd3)',
    teal:   'linear-gradient(140deg,#f0fdfa,#ccfbf1)',
    slate:  'linear-gradient(140deg,#f8fafc,#e2e8f0)',
    amber:  'linear-gradient(140deg,#fffbeb,#fde68a)',
    violet: 'linear-gradient(140deg,#f5f3ff,#ede9fe)',
  }

  return (
    <section className="proj-hero">
      <div className="fade-up">
        <button className="proj-back" onClick={() => navigate('/')}>
          ← Voltar ao portfólio
        </button>
        <div className="proj-cat">{projeto.categoria}</div>
        <h1 className="proj-title">{projeto.nome}</h1>
        <p className="proj-lead">{projeto.desafio}</p>
        <div className="proj-meta">
          {projeto.tags.map(t => (
            <span className="pmeta-tag" key={t}>{t}</span>
          ))}
        </div>
      </div>

      <div
        className="proj-visual fade-up"
        style={{ background: gradientes[projeto.cor], transitionDelay: '0.15s' }}
      >
        <div className="proj-visual-inner">
          <Carrossel imagens={projeto.imagens} titulo={projeto.nome} />
        </div>
      </div>
    </section>
  )
}

/* ── NAVEGAÇÃO ENTRE PROJETOS ── */
function NavBar({ anterior, proximo, navigate }) {
  return (
    <div className="proj-nav-bar">
      <div>
        {anterior && (
          <div className="proj-nav-item" onClick={() => navigate(`/projeto/${anterior.slug}`)}>
            <div className="pni-label">Anterior</div>
            <div className="pni-name">← {anterior.nome}</div>
          </div>
        )}
      </div>
      <div>
        {proximo && (
          <div className="proj-nav-item" onClick={() => navigate(`/projeto/${proximo.slug}`)}>
            <div className="pni-label">Próximo</div>
            <div className="pni-name">{proximo.nome} →</div>
          </div>
        )}
      </div>
    </div>
  )
}

/* ── FEATURES ── */
function Desafio({ projeto }) {
  return (
    <section className="proj-section fade-up">
      <div className="eyebrow">O projeto</div>
      <h2 className="sec-title" style={{ marginBottom: '1.5rem' }}>O que foi construído</h2>
      <div className="features-grid">
        {projeto.features.map((f, i) => (
          <div className="feat-card" key={i}>
            <div className="feat-icon">{f.icon}</div>
            <div className="feat-title">{f.titulo}</div>
            <div className="feat-desc">{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── STACK ── */
function StackTec({ projeto }) {
  return (
    <section className="proj-section proj-section-alt fade-up">
      <div className="eyebrow">Stack tecnológica</div>
      <h2 className="sec-title" style={{ marginBottom: '1.5rem' }}>Tecnologias utilizadas</h2>
      <div className="tech-stack">
        {projeto.stack.map((tech, i) => (
          <div className="tech-pill" key={i}>
            <div className="tp-dot" style={{ background: projeto.stackCores[i] || '#888' }}></div>
            {tech}
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── RESULTADOS ── */
function Resultados({ projeto }) {
  return (
    <section className="proj-section fade-up">
      <div className="eyebrow">Resultados</div>
      <h2 className="sec-title" style={{ marginBottom: '1.5rem' }}>Impacto após o lançamento</h2>
      <div className="results-grid">
        {projeto.resultados.map((r, i) => (
          <div className="result-card" key={i}>
            <div className="result-num">{r.num}</div>
            <div className="result-label">{r.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── CTA ── */
function ProjetoCTA({ navigate }) {
  return (
    <div className="proj-cta-bar">
      <p>Quer um projeto como este para o seu negócio?</p>
      <button
        className="btn-primary"
        onClick={() => {
          navigate('/')
          setTimeout(() => {
            document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
          }, 100)
        }}
      >
        Solicitar orçamento gratuito
      </button>
    </div>
  )
}