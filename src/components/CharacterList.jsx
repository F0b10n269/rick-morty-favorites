import './CharacterList.css'
import CharacterCard from './CharacterCard'

function CharacterList({ characters }) {
  if (!characters || characters.length === 0) {
    return (
      <div className="character-empty">
        No se encontraron personajes. Prueba otro nombre para buscar.
      </div>
    )
  }

  return (
    <>
      <div className="character-count">Mostrando {characters.length} personajes</div>
      <section className="character-list">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </section>
    </>
  )
}

export default CharacterList
