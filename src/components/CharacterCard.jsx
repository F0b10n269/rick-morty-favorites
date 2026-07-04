import './CharacterCard.css'

function CharacterCard({ character, isFavorite, isBlocked, onToggleFavorite, onToggleBlock }) {
  const getStatusClass = (status) => {
    if (status === 'Alive') return 'alive'
    if (status === 'Dead') return 'dead'
    return 'unknown'
  }

  return (
    <article className={`character-card ${isBlocked ? 'blocked' : ''}`}>
      <img
        className="character-image"
        src={character.image}
        alt={character.name}
      />
      <div className="character-card-body">
        <div className="card-top-row">
          <h2>{character.name}</h2>
          <div className="card-actions">
            <button
              type="button"
              className={`favorite-button ${isFavorite ? 'active' : ''}`}
              onClick={() => onToggleFavorite(character.id)}
              disabled={isBlocked}
            >
              {isFavorite ? '☆ Quitar favorito' : '⭐ Añadir favorito'}
            </button>
            <button
              type="button"
              className={`block-button ${isBlocked ? 'active' : ''}`}
              onClick={() => onToggleBlock(character.id)}
            >
              {isBlocked ? 'Desbloquear' : 'Bloquear'}
            </button>
          </div>
        </div>
        <p className="character-detail">
          <span className={`status-dot ${getStatusClass(character.status)}`} />
          {character.status} • {character.species}
        </p>
      </div>
    </article>
  )
}

export default CharacterCard
