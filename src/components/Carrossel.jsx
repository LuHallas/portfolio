import { useState } from 'react'

export default function Carrossel({ imagens, titulo }) {
  const [atual, setAtual] = useState(0)

  if (!imagens || imagens.length === 0) return null

  function anterior() {
    setAtual(i => (i === 0 ? imagens.length - 1 : i - 1))
  }

  function proximo() {
    setAtual(i => (i === imagens.length - 1 ? 0 : i + 1))
  }

  return (
    <div className="carrossel">
      <div className="carrossel-browser">
        <div className="carrossel-bar">
          <div className="cb-dot" style={{ background: '#ff5f57' }} />
          <div className="cb-dot" style={{ background: '#febc2e' }} />
          <div className="cb-dot" style={{ background: '#28c840' }} />
          <div className="cb-url" />
        </div>
        <div className="carrossel-img-wrap">
          {imagens.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${titulo} — tela ${i + 1}`}
              className={`carrossel-img ${i === atual ? 'ativo' : ''}`}
            />
          ))}
          {imagens.length > 1 && (
            <>
              <button className="carrossel-btn prev" onClick={anterior}>‹</button>
              <button className="carrossel-btn next" onClick={proximo}>›</button>
            </>
          )}
        </div>
      </div>

      {imagens.length > 1 && (
        <div className="carrossel-thumbs">
          {imagens.map((img, i) => (
            <button
              key={i}
              className={`carrossel-thumb ${i === atual ? 'ativo' : ''}`}
              onClick={() => setAtual(i)}
            >
              <img src={img} alt={`Miniatura ${i + 1}`} />
            </button>
          ))}
        </div>
      )}

      <div className="carrossel-counter">{atual + 1} / {imagens.length}</div>
    </div>
  )
}