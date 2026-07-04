import './FavoritesPanel.css'

function FavoritesPanel({ favorites }) {
  return (
    <aside className="favorites-panel">
      <div className="favorites-header">
        <h2>Favoritos ({favorites.length})</h2>
      </div>

      {favorites.length === 0 ? (
        <div className="favorites-empty">
          <p>No hay favoritos aún</p>
          <small>Agrega personajes favoritos desde el listado.</small>
        </div>
      ) : (
        <ul className="favorites-list">
          {favorites.map((character) => (
            <li key={character.id} className="favorite-item">
              <img
                className="favorite-avatar"
                src={character.image}
                alt={character.name}
              />
              <span>{character.name}</span>
            </li>
          ))}
        </ul>
      )}
    </aside>
  )
}

export default FavoritesPanel
