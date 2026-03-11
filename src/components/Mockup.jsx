/* Mockup animado único para cada tipo de projeto */

export default function Mockup({ tipo, imagem }) {
  if (imagem) {
    return (
      <div className="mk-browser">
        <MkBar />
        <div className="mk-screenshot">
          <img src={imagem} alt={`Screenshot do projeto ${tipo}`} />
        </div>
      </div>
    )
  }

  const mockups = {
    advocacia:        <MockupAdvocacia />,
    'ecommerce-moda': <MockupEcommerce />,
    clinica:          <MockupLanding />,
    sistema:          <MockupSistema />,
    cafe:             <MockupCafe />,
    construtora:      <MockupConstrutora />,
  }
  return mockups[tipo] || null
}

/* ── ADVOCACIA — site institucional com hero + seções ── */
function MockupAdvocacia() {
  return (
    <div className="mk-browser">
      <MkBar />
      <div className="mk-body">
        <div className="mk-hero" style={{ background: 'linear-gradient(135deg,#1e3a5f,#2563eb)' }}>
          <div className="mk-hero-content">
            <div className="mk-line w70 light" />
            <div className="mk-line w50 light op50" />
            <div className="mk-btn-mock" />
          </div>
          <div className="mk-hero-shape" />
        </div>
        <div className="mk-cards-row">
          {['⚖️','📋','🤝'].map((icon,i) => (
            <div className="mk-card-item" key={i}>
              <div className="mk-card-icon">{icon}</div>
              <div className="mk-line w80" />
              <div className="mk-line w60 op50" />
              <div className="mk-line w60 op50" />
            </div>
          ))}
        </div>
        <div className="mk-text-section">
          <div className="mk-line w40 accent" />
          <div className="mk-line w90" />
          <div className="mk-line w70 op50" />
          <div className="mk-line w80 op50" />
        </div>
      </div>
    </div>
  )
}

/* ── E-COMMERCE MODA — grid de produtos ── */
function MockupEcommerce() {
  const produtos = [
    { cor: '#fecdd3' },
    { cor: '#fbcfe8' },
    { cor: '#fde68a' },
    { cor: '#fecdd3' },
    { cor: '#ddd6fe' },
    { cor: '#bfdbfe' },
  ]
  return (
    <div className="mk-browser">
      <MkBar />
      <div className="mk-body">
        <div className="mk-ecom-header">
          <div className="mk-line w30 accent" />
          <div style={{ display:'flex', gap:'6px' }}>
            {['Todas','Vestidos','Blusas','Calças'].map(f => (
              <div className="mk-filter-tag" key={f}>{f}</div>
            ))}
          </div>
        </div>
        <div className="mk-products-grid">
          {produtos.map((p, i) => (
            <div key={i}>
              <div className="mk-product-img" style={{ background: p.cor }}>
                <div className="mk-product-badge">Novo</div>
              </div>
              <div className="mk-line w80" style={{ marginTop:'6px' }} />
              <div className="mk-price">R$ {(89 + i * 30).toFixed(2)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── LANDING PAGE CLÍNICA ── */
function MockupLanding() {
  return (
    <div className="mk-browser">
      <MkBar />
      <div className="mk-body">
        <div className="mk-hero" style={{ background: 'linear-gradient(135deg,#134e4a,#0d9488)', minHeight:'90px' }}>
          <div className="mk-hero-content">
            <div className="mk-line w60 light" />
            <div className="mk-line w80 light op50" />
          </div>
        </div>
        <div className="mk-cta-block">
          <div className="mk-line w50 accent" />
          <div className="mk-line w90 op50" />
          <div className="mk-cta-form">
            <div className="mk-input-mock" />
            <div className="mk-input-mock" />
            <div className="mk-submit-mock">Agendar consulta grátis</div>
          </div>
        </div>
        <div className="mk-trust-row">
          {['⭐⭐⭐⭐⭐','120+ clientes','Resultado garantido'].map((t,i) => (
            <div className="mk-trust-item" key={i}>
              <div style={{ fontSize:'0.6rem', color:'#555' }}>{t}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── SISTEMA WEB — dashboard com sidebar ── */
function MockupSistema() {
  const bars = [65, 40, 80, 55, 70, 45, 90]
  return (
    <div className="mk-browser">
      <MkBar />
      <div className="mk-sys-layout">
        <div className="mk-sidebar">
          <div className="mk-sidebar-logo" />
          {['Dashboard','Estoque','Pedidos','Clientes','Relatórios'].map((item, i) => (
            <div className={`mk-sidebar-item ${i === 0 ? 'active' : ''}`} key={item}>
              <div className="mk-sidebar-dot" />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className="mk-main">
          <div className="mk-kpis">
            {[
              { label:'Pedidos', val:'248', cor:'#bfdbfe' },
              { label:'Receita', val:'R$42k', cor:'#bbf7d0' },
              { label:'Estoque', val:'1.2k', cor:'#fde68a' },
            ].map((k,i) => (
              <div className="mk-kpi" key={i} style={{ background: k.cor }}>
                <div className="mk-kpi-val">{k.val}</div>
                <div className="mk-kpi-label">{k.label}</div>
              </div>
            ))}
          </div>
          <div className="mk-chart">
            <div className="mk-chart-label">Vendas — últimos 7 dias</div>
            <div className="mk-chart-bars">
              {bars.map((h, i) => (
                <div key={i} className="mk-bar-wrap">
                  <div className="mk-bar" style={{ height:`${h}%`, animationDelay:`${i*0.1}s` }} />
                  <div className="mk-bar-x">{['S','T','Q','Q','S','S','D'][i]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── CAFÉ — e-commerce com assinatura ── */
function MockupCafe() {
  return (
    <div className="mk-browser">
      <MkBar />
      <div className="mk-body">
        <div className="mk-hero" style={{ background:'linear-gradient(135deg,#451a03,#92400e)', minHeight:'80px' }}>
          <div className="mk-hero-content">
            <div style={{ fontSize:'0.9rem', marginBottom:'4px' }}>☕</div>
            <div className="mk-line w60 light" />
            <div className="mk-line w40 light op50" />
          </div>
        </div>
        <div className="mk-plans-row">
          {[
            { cor:'#fef3c7', preco:'R$59' },
            { cor:'#fde68a', preco:'R$89', dest:true },
            { cor:'#fcd34d', preco:'R$139' },
          ].map((p,i) => (
            <div className="mk-plan-mini" key={i} style={{ background: p.cor, border: p.dest ? '2px solid #92400e' : '1px solid #e5e7eb' }}>
              {p.dest && <div className="mk-plan-badge">Popular</div>}
              <div className="mk-line w70" />
              <div className="mk-price" style={{ color:'#92400e' }}>{p.preco}<span>/mês</span></div>
            </div>
          ))}
        </div>
        <div className="mk-text-section">
          <div className="mk-line w50 accent" />
          <div className="mk-line w90 op50" />
          <div className="mk-line w70 op50" />
        </div>
      </div>
    </div>
  )
}

/* ── CONSTRUTORA — galeria de empreendimentos ── */
function MockupConstrutora() {
  return (
    <div className="mk-browser">
      <MkBar />
      <div className="mk-body">
        <div className="mk-hero" style={{ background:'linear-gradient(135deg,#2e1065,#4c1d95)', minHeight:'100px', position:'relative', overflow:'hidden' }}>
          <div className="mk-buildings">
            {[50,70,40,80,60].map((h,i) => (
              <div key={i} className="mk-building" style={{ height:`${h}%`, background:`rgba(255,255,255,${0.1 + i*0.04})` }} />
            ))}
          </div>
          <div className="mk-hero-content" style={{ position:'relative', zIndex:2 }}>
            <div className="mk-line w60 light" />
            <div className="mk-line w40 light op50" />
          </div>
        </div>
        <div className="mk-emp-grid">
          {[
            { cor:'#ede9fe' },
            { cor:'#ddd6fe' },
            { cor:'#c4b5fd' },
          ].map((e,i) => (
            <div key={i}>
              <div className="mk-emp-img" style={{ background: e.cor }} />
              <div className="mk-line w80" style={{ marginTop:'5px' }} />
              <div className="mk-line w50 op50" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── BARRA DO BROWSER ── */
function MkBar() {
  return (
    <div className="mk-bar">
      <div className="mk-dot" style={{ background:'#ff5f57' }} />
      <div className="mk-dot" style={{ background:'#febc2e' }} />
      <div className="mk-dot" style={{ background:'#28c840' }} />
      <div className="mk-url" />
    </div>
  )
}