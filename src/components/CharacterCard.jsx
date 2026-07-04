import './CharacterCard.css'

function CharacterCard({ character, isFavorite, onToggleFavorite }) {
  const getStatusClass = (status) => {
    if (status === 'Alive') return 'alive'
    if (status === 'Dead') return 'dead'
    return 'unknown'
  }

  return (
    <article className="character-card">
      <img
        className="character-image"
        src={character.image}
        alt={character.name}
      />
      <div className="character-card-body">
        <div className="card-top-row">
          <h2>{character.name}</h2>
          <button
            type="button"
            className={`favorite-button ${isFavorite ? 'active' : ''}`}
            onClick={() => onToggleFavorite(character.id)}
          >
            {isFavorite ? '☆ Quitar favorito' : '⭐ Añadir favorito'}
          </button>
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
