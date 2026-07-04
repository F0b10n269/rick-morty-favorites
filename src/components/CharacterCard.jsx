import './CharacterCard.css'

function CharacterCard({ character }) {
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
        <h2>{character.name}</h2>
        <p className="character-detail">
          <span className={`status-dot ${getStatusClass(character.status)}`} />
          {character.status} - {character.species}
        </p>
      </div>
    </article>
  )
}

export default CharacterCard
