import { useMemo, useState } from 'react'
import './App.css'
import { useFetch } from './hooks/useFetch'
import CharacterList from './components/CharacterList'
import SearchBar from './components/SearchBar'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const { data, loading, error } = useFetch('https://rickandmortyapi.com/api/character')
  const characters = data?.results || []

  const filteredCharacters = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase()
    if (!normalizedSearch) return characters

    return characters.filter((character) =>
      character.name.toLowerCase().includes(normalizedSearch)
    )
  }, [characters, searchTerm])

  return (
    <div className="app">
      <main className="app-container">
        <header className="app-header">
          <h1>Rick and Morty - Favoritos</h1>
          <p className="integrantes">Integrantes: Fabian Calderon</p>
        </header>

        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        {loading && <div className="app-status">Cargando personajes...</div>}
        {error && <div className="app-error">Error: {error}</div>}
        {!loading && !error && <CharacterList characters={filteredCharacters} />}
      </main>
    </div>
  )
}

export default App