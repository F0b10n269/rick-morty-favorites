import { useMemo, useState } from 'react'
import './App.css'
import { useFetch } from './hooks/useFetch'
import { useLocalStorage } from './hooks/useLocalStorage'
import CharacterList from './components/CharacterList'
import FavoritesPanel from './components/FavoritesPanel'
import BlockedPanel from './components/BlockedPanel'
import SearchBar from './components/SearchBar'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [favoriteIds, setFavoriteIds] = useLocalStorage('rm-favorites', [])
  const { data, loading, error } = useFetch('https://rickandmortyapi.com/api/character')
  const characters = data?.results || []

  const [blockedIds, setBlockedIds] = useLocalStorage('rm-blocked', [])

  const filteredCharacters = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase()
    const list = characters.filter((c) => !blockedIds.includes(c.id))
    if (!normalizedSearch) return list

    return list.filter((character) =>
      character.name.toLowerCase().includes(normalizedSearch)
    )
  }, [characters, searchTerm, blockedIds])

  const favoriteCharacters = useMemo(
    () => characters.filter((character) => favoriteIds.includes(character.id) && !blockedIds.includes(character.id)),
    [characters, favoriteIds, blockedIds]
  )

  const toggleFavorite = (characterId) => {
    // prevent adding favorites for blocked items
    if (blockedIds.includes(characterId)) return

    setFavoriteIds((currentFavorites) =>
      currentFavorites.includes(characterId)
        ? currentFavorites.filter((id) => id !== characterId)
        : [...currentFavorites, characterId]
    )
  }

  const toggleBlock = (characterId) => {
    setBlockedIds((current) => {
      const isBlocked = current.includes(characterId)
      if (isBlocked) {
        // unblocking
        return current.filter((id) => id !== characterId)
      }

      // blocking: also remove from favorites
      setFavoriteIds((fav) => fav.filter((id) => id !== characterId))
      return [...current, characterId]
    })
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
                blocked={blockedIds}
                onToggleFavorite={toggleFavorite}
                onToggleBlock={toggleBlock}
              />
            )}
        </section>

          <aside className="side-panel">
            <FavoritesPanel favorites={favoriteCharacters} />
            <BlockedPanel blocked={blockedIds} blockedCharacters={characters.filter(c => blockedIds.includes(c.id))} onUnblock={toggleBlock} />
          </aside>
      </main>
    </div>
  )
}

export default App