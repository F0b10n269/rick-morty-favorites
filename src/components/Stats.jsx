import './Stats.css'

function Stats({ total = 0, favorites = 0, blocked = 0 }) {
  return (
    <div className="stats-container">
      <div className="stat-card">
        <div className="stat-number">{total}</div>
        <div className="stat-label">📊 Total</div>
      </div>

      <div className="stat-card">
        <div className="stat-number">{favorites}</div>
        <div className="stat-label">⭐ Favoritos</div>
      </div>

      <div className="stat-card">
        <div className="stat-number">{blocked}</div>
        <div className="stat-label">🔒 Bloqueados</div>
      </div>
    </div>
  )
}

export default Stats
