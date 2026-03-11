import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { projetos } from '../data/projetos'

export default function Home() {
  const navigate = useNavigate()

  // Animação fade-up ao scrollar
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
  }, [])

  return (
    <main>
      <Hero />
      <StatsBar />
      <Sobre />
      <Servicos />
      <Processo />
      <Portfolio navigate={navigate} />
      <Planos />
      <Depoimentos />
      <Contato />
    </main>
  )
}

/* ── HERO ── */
function Hero() {
  return (
    <section className="hero">
      <div className="fade-up">
        <div className="hero-eyebrow">✦ Desenvolvimento Web Profissional</div>
        <h1>Sites que <em>vendem</em><br />e impressionam.</h1>
        <p className="hero-sub">
          Da identidade digital ao e-commerce completo — soluções web sob medida
          que geram resultado real para o seu negócio.
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
            Ver projetos
          </button>
          <button className="btn-text" onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}>
            Falar sobre seu projeto →
          </button>
        </div>
      </div>

      <div className="hero-right fade-up" style={{ transitionDelay: '0.15s' }}>
        <div className="hcard hcard-main">
          <div className="hbrow">
            <div className="hb-dot hb-r"></div>
            <div className="hb-dot hb-y"></div>
            <div className="hb-dot hb-g"></div>
            <div className="hb-url"></div>
          </div>
          <div className="hmock"></div>
          <div className="hl"></div>
          <div className="hl" style={{ width: '55%' }}></div>
          <div className="hl ac"></div>
          <div className="hl" style={{ width: '72%' }}></div>
        </div>
        <div className="hcard hcard-s1">
          <div className="smn-l">Projetos entregues</div>
          <div className="smn-n">40+</div>
          <div className="smn-s">Sites, e-commerces e sistemas</div>
        </div>
        <div className="hcard hcard-s2">
          <div className="smn-l">Conversão média</div>
          <div className="smn-n">3×</div>
          <div className="smn-s">Mais resultados após o lançamento</div>
        </div>
        <div className="hcard hcard-badge">
          <div className="bdot"></div>
          Disponível para novos projetos
        </div>
      </div>
    </section>
  )
}

/* ── STATS ── */
function StatsBar() {
  const stats = [
    { num: '40+', label: 'Projetos entregues' },
    { num: '98%', label: 'Clientes satisfeitos' },
    { num: '3×',  label: 'Aumento médio em conversões' },
    { num: '5★',  label: 'Avaliação média dos clientes' },
  ]
  return (
    <div className="stats-bar">
      {stats.map((s, i) => (
        <div className="si fade-up" key={i}>
          <div className="si-n">{s.num}</div>
          <div className="si-l">{s.label}</div>
        </div>
      ))}
    </div>
  )
}

/* ── SOBRE ── */
function Sobre() {
  return (
    <section className="section" id="sobre">
      <div className="about-grid">
        <div className="about-img fade-up">
          <div className="about-monogram">HS</div>
          <div className="about-badge">
            <div className="smn-l">Desde</div>
            <div className="smn-n" style={{ fontSize: '1.4rem' }}>2020</div>
          </div>
        </div>
        <div className="about-text fade-up" style={{ transitionDelay: '0.1s' }}>
          <div className="eyebrow">Sobre a empresa</div>
          <h2 className="sec-title" style={{ marginBottom: '1.8rem' }}>
            Tecnologia que<br /><em>transforma negócios.</em>
          </h2>
          <p>A Hallas Software é uma empresa de desenvolvimento web focada em entregar soluções digitais que realmente funcionam para o seu negócio. Trabalhamos com atenção total aos detalhes, do design à performance.</p>
          <p>Atendemos empresas de todos os tamanhos — do MEI que precisa de presença digital até empresas que precisam de sistemas complexos sob medida.</p>
          <p>Cada projeto é desenvolvido com código limpo, design responsivo e foco total em resultado. Não entregamos apenas um site — entregamos uma ferramenta de vendas.</p>
          <div className="about-chips">
            {['🎯 Foco em resultado', '🚀 Entrega no prazo', '💬 Comunicação clara', '🔧 Suporte contínuo', '📱 100% responsivo', '⚡ Alta performance'].map(c => (
              <span className="chip" key={c}>{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── SERVIÇOS ── */
function Servicos() {
  const servicos = [
    { icon: '🏢', titulo: 'Sites Institucionais', desc: 'Presença digital profissional com design exclusivo, SEO otimizado e performance de ponta.' },
    { icon: '🛒', titulo: 'E-commerce', desc: 'Lojas virtuais completas com checkout otimizado, integração de pagamento e gestão de estoque.' },
    { icon: '🎯', titulo: 'Landing Pages', desc: 'Páginas de alta conversão integradas com Google Ads, Facebook Ads e automação de marketing.' },
    { icon: '⚙️', titulo: 'Sistemas Web', desc: 'Plataformas e painéis sob medida para automatizar processos e escalar seu negócio.' },
  ]
  return (
    <section className="section section-alt" id="servicos">
      <div className="sec-head fade-up">
        <div>
          <div className="eyebrow">O que fazemos</div>
          <h2 className="sec-title">Serviços</h2>
        </div>
      </div>
      <div className="svc-grid fade-up">
        {servicos.map((s, i) => (
          <div className="svc-card" key={i}>
            <div className="svc-icon">{s.icon}</div>
            <div className="svc-title">{s.titulo}</div>
            <div className="svc-desc">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── PROCESSO ── */
function Processo() {
  const passos = [
    { num: '01', titulo: 'Briefing', desc: 'Entendemos seu negócio, objetivos e público antes de qualquer código.' },
    { num: '02', titulo: 'Proposta', desc: 'Escopo detalhado, cronograma e investimento transparente.' },
    { num: '03', titulo: 'Design', desc: 'Layout aprovado no Figma antes de iniciar o desenvolvimento.' },
    { num: '04', titulo: 'Desenvolvimento', desc: 'Entregas parciais e revisões constantes até o resultado esperado.' },
    { num: '05', titulo: 'Entrega & Suporte', desc: 'Publicação, treinamento e suporte contínuo pós-entrega.' },
  ]
  return (
    <section className="section" id="processo">
      <div className="sec-head fade-up">
        <div>
          <div className="eyebrow">Como trabalhamos</div>
          <h2 className="sec-title">Processo de trabalho</h2>
        </div>
      </div>
      <div className="proc-list fade-up">
        {passos.map((p, i) => (
          <div className="proc-step" key={i}>
            <div className="proc-num">{p.num}</div>
            <div className="proc-title">{p.titulo}</div>
            <div className="proc-desc">{p.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── PORTFOLIO ── */
const corClasses = {
  blue:   { vis: 'mv-blue',   h: 'linear-gradient(120deg,#dbeafe,#bfdbfe)' },
  rose:   { vis: 'mv-rose',   h: 'linear-gradient(120deg,#fecdd3,#fda4af)' },
  teal:   { vis: 'mv-teal',   h: 'linear-gradient(120deg,#ccfbf1,#99f6e4)' },
  slate:  { vis: 'mv-slate',  h: 'linear-gradient(120deg,#e2e8f0,#cbd5e1)' },
  amber:  { vis: 'mv-amber',  h: 'linear-gradient(120deg,#fde68a,#fcd34d)' },
  violet: { vis: 'mv-violet', h: 'linear-gradient(120deg,#ede9fe,#ddd6fe)' },
}

function Portfolio({ navigate }) {
  const tamanhos = ['pcard-lg', 'pcard-md', 'pcard-sm', 'pcard-sm', 'pcard-md', 'pcard-sm']

  return (
    <section className="section section-alt" id="portfolio">
      <div className="sec-head fade-up">
        <div>
          <div className="eyebrow">Portfólio</div>
          <h2 className="sec-title">Projetos selecionados</h2>
        </div>
      </div>
      <div className="port-grid">
        {projetos.map((p, i) => {
          const cor = corClasses[p.cor]
          return (
            <div
              key={p.slug}
              className={`pcard ${tamanhos[i]} fade-up`}
              style={{ transitionDelay: `${i * 0.08}s` }}
              onClick={() => navigate(`/projeto/${p.slug}`)}
            >
              <div className={`pcard-vis ${cor.vis}`}>
                <div className="pcard-browser">
                  <div className="pcard-bar">
                    <span className="pcard-dot" style={{ background: '#ff5f57' }} />
                    <span className="pcard-dot" style={{ background: '#febc2e' }} />
                    <span className="pcard-dot" style={{ background: '#28c840' }} />
                    <span className="pcard-url" />
                  </div>
                  <div className="pcard-img-wrap">
                    <img src={p.imagem} alt={p.nome} className="pcard-img" />
                  </div>
                </div>
              </div>
              <div className="pcard-body">
                <div className="pcard-cat">{p.categoria}</div>
                <div className="pcard-name">{p.nome}</div>
                <div className="pcard-desc">{p.descricaoCard}</div>
                <div className="pcard-tags">
                  {p.tags.map(t => <span className="ptag" key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

/* ── PLANOS ── */
function Planos() {
  const planos = [
    {
      icon: '🎯', tipo: 'Landing Page', nome: 'Conversão & Captação',
      preco: 'R$800 ', suporte: 'R$ 150/mês', destaque: false,
      features: ['Design exclusivo e responsivo', 'Formulário de captação de leads', 'Integração com WhatsApp', 'Pixel de conversão (Meta / Google)', 'SEO básico on-page', 'Entrega em até 7 dias'],
    },
    {
      icon: '🏢', tipo: 'Site Institucional', nome: 'Presença Digital Completa',
      preco: 'R$ 2.000', suporte: 'R$ 250/mês', destaque: true,
      features: ['Até 8 páginas completas', 'Design exclusivo e responsivo', 'CMS para edição de conteúdo', 'Blog integrado', 'SEO técnico completo', 'Google Analytics configurado', 'Entrega em até 20 dias'],
    },
    {
      icon: '🛒', tipo: 'E-commerce', nome: 'Loja Virtual Completa',
      preco: 'R$ 4.000', suporte: 'R$ 400/mês', destaque: false,
      features: ['Catálogo ilimitado de produtos', 'Checkout otimizado para conversão', 'Integração Pix, cartão e boleto', 'Integração com Correios / fretes', 'Painel de gestão de pedidos', 'Relatórios de vendas', 'Entrega em até 35 dias'],
    },
    {
      icon: '⚙️', tipo: 'Sistema Web', nome: 'Plataforma Sob Medida',
      preco: 'R$ 8.000', suporte: 'R$ 600/mês', destaque: false,
      features: ['Levantamento de requisitos', 'Arquitetura de banco de dados', 'Painel administrativo completo', 'API RESTful documentada', 'Controle de usuários e permissões', 'Hospedagem em nuvem configurada', 'Prazo definido por escopo'],
    },
  ]

  return (
    <section className="section" id="planos">
      <div className="sec-head fade-up">
        <div>
          <div className="eyebrow">Investimento</div>
          <h2 className="sec-title">Planos e preços</h2>
        </div>
      </div>
      <p className="plans-intro fade-up">
        Cada projeto é único. Os valores abaixo são referências de entrada. Entre em contato para um orçamento personalizado — sem compromisso.
      </p>
      <div className="plans-grid fade-up">
        {planos.map((p, i) => (
          <div className={`plan-card ${p.destaque ? 'featured' : ''}`} key={i}>
            {p.destaque && <div className="plan-badge">Mais popular</div>}
            <div className="plan-icon">{p.icon}</div>
            <div className="plan-type">{p.tipo}</div>
            <div className="plan-name">{p.nome}</div>
            <div className="plan-price">
              <div className="plan-from">A partir de</div>
              <div className="plan-val">{p.preco}</div>
              <div className="plan-period">+ Suporte a partir de {p.suporte}</div>
            </div>
            <div className="plan-divider"></div>
            <ul className="plan-features">
              {p.features.map((f, j) => <li key={j}>{f}</li>)}
            </ul>
            <button
              className="plan-cta"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Solicitar orçamento
            </button>
          </div>
        ))}
      </div>
      <p className="plans-note fade-up">* Todos os projetos incluem 30 dias de garantia. Parcelamento em até 3x disponível.</p>
    </section>
  )
}

/* ── DEPOIMENTOS ── */
function Depoimentos() {
  const deps = [
    { ini: 'CA', cor: '#dbeafe', corT: '#2563eb', texto: '"O site ficou exatamente como eu imaginava. Entregou no prazo e com muita atenção aos detalhes. Meu número de contatos aumentou muito."', nome: 'Carlos Andrade', cargo: 'Sócio — Andrade Advocacia' },
    { ini: 'PR', cor: '#fce7f3', corT: '#db2777', texto: '"Nossa loja virtual triplicou o faturamento online em 4 meses. O checkout é rápido, bonito e os clientes adoram."', nome: 'Patrícia Reis', cargo: 'Fundadora — Belle Boutique' },
    { ini: 'RF', cor: '#ede9fe', corT: '#7c3aed', texto: '"O sistema eliminou planilhas, reduziu erros e deu muito mais visibilidade ao nosso estoque. Recomendo sem hesitar."', nome: 'Roberto Fonseca', cargo: 'Diretor — Distribuidora Nortex' },
  ]
  return (
    <section className="section section-alt">
      <div className="sec-head fade-up">
        <div>
          <div className="eyebrow">Depoimentos</div>
          <h2 className="sec-title">O que dizem os clientes</h2>
        </div>
      </div>
      <div className="tgrid fade-up">
        {deps.map((d, i) => (
          <div className="tcard" key={i}>
            <div className="tc-stars">★★★★★</div>
            <div className="tc-text">{d.texto}</div>
            <div className="tc-author">
              <div className="tc-av" style={{ background: d.cor, color: d.corT }}>{d.ini}</div>
              <div>
                <div className="tc-name">{d.nome}</div>
                <div className="tc-role">{d.cargo}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── CONTATO ── */
function Contato() {
  return (
    <section className="section" id="contato">
      <div className="sec-head fade-up">
        <div>
          <div className="eyebrow">Entre em contato</div>
          <h2 className="sec-title">Vamos conversar?</h2>
        </div>
      </div>
      <div className="contact-grid fade-up">
        <div className="contact-info">
          <h3>Transforme sua ideia<br />em realidade digital.</h3>
          <p>Descreva seu projeto e entraremos em contato em até 24 horas com uma proposta personalizada. Sem compromisso.</p>
          <div className="contact-items">
            {[
              { icon: '💬', label: 'WhatsApp', value: '(55) 99732-4370', href: 'https://wa.me/5555997324370' },
              { icon: '📧', label: 'E-mail', value: 'contato@hallassoftware.com.br', href: 'mailto:contato@hallassoftware.com.br' },
              { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/hallassoftware', href: '#' },
              { icon: '📸', label: 'Instagram', value: '@hallassoftware', href: '#' },
            ].map((c, i) => (
              <a href={c.href} className="contact-item" key={i}>
                <div className="ci-icon">{c.icon}</div>
                <div>
                  <div className="ci-label">{c.label}</div>
                  <div className="ci-value">{c.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="contact-form">
          <div className="form-row">
            <div className="form-group"><label>Nome</label><input type="text" placeholder="Seu nome" /></div>
            <div className="form-group"><label>E-mail</label><input type="email" placeholder="seu@email.com" /></div>
          </div>
          <div className="form-row">
            <div className="form-group"><label>Telefone</label><input type="tel" placeholder="(00) 00000-0000" /></div>
            <div className="form-group">
              <label>Tipo de projeto</label>
              <select>
                <option value="">Selecione...</option>
                <option>Landing Page</option>
                <option>Site Institucional</option>
                <option>E-commerce</option>
                <option>Sistema Web</option>
                <option>Outro</option>
              </select>
            </div>
          </div>
          <div className="form-group"><label>Conte sobre seu projeto</label><textarea placeholder="Descreva brevemente o que você precisa..."></textarea></div>
          <button className="btn-primary" style={{ width: '100%' }}>Enviar mensagem →</button>
        </div>
      </div>
    </section>
  )
}