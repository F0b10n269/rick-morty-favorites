import { useMemo, useState } from 'react'
import './App.css'
import { useFetch } from './hooks/useFetch'
import { useLocalStorage } from './hooks/useLocalStorage'
import CharacterList from './components/CharacterList'
import FavoritesPanel from './components/FavoritesPanel'
import SearchBar from './components/SearchBar'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [favoriteIds, setFavoriteIds] = useLocalStorage('rm-favorites', [])
  const { data, loading, error } = useFetch('https://rickandmortyapi.com/api/character')
  const characters = data?.results || []

  const filteredCharacters = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase()
    if (!normalizedSearch) return characters

    return characters.filter((character) =>
      character.name.toLowerCase().includes(normalizedSearch)
    )
  }, [characters, searchTerm])

  const favoriteCharacters = useMemo(
    () => characters.filter((character) => favoriteIds.includes(character.id)),
    [characters, favoriteIds]
  )

  const toggleFavorite = (characterId) => {
    setFavoriteIds((currentFavorites) =>
      currentFavorites.includes(characterId)
        ? currentFavorites.filter((id) => id !== characterId)
        : [...currentFavorites, characterId]
    )
  }

  return (
    <div className="app">
      <main className="main-layout">
        <section className="main-content">
          <header className="app-header">
            <h1>Rick and Morty - Favoritos</h1>
            <p className="integrantes">Integrantes: Fabian Calderon</p>
          </header>

          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

          {loading && <div className="app-status">Cargando personajes...</div>}
          {error && <div className="app-error">Error: {error}</div>}
          {!loading && !error && (
            <CharacterList
              characters={filteredCharacters}
              favorites={favoriteIds}
              onToggleFavorite={toggleFavorite}
            />
          )}
        </section>

        <FavoritesPanel favorites={favoriteCharacters} />
      </main>
    </div>
  )
}

export default App