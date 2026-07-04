import './BlockedPanel.css'

function BlockedPanel({ blocked = [], blockedCharacters = [], onUnblock }) {
  return (
    <aside className="blocked-panel">
      <div className="blocked-header">
        <h3>🚫 Bloqueados ({blocked.length})</h3>
      </div>

      {blocked.length === 0 ? (
        <div className="blocked-empty">No hay elementos bloqueados.</div>
      ) : (
        <ul className="blocked-list">
          {blockedCharacters.map((c) => (
            <li className="blocked-item" key={c.id}>
              <img src={c.image} alt={c.name} className="blocked-avatar" />
              <div className="blocked-meta">
                <div className="blocked-name">{c.name}</div>
                <button className="unblock-button" onClick={() => onUnblock(c.id)}>
                  Desbloquear
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </aside>
  )
}

export default BlockedPanel
