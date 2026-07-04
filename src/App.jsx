import './App.css'
import { useFetch } from './hooks/useFetch'
import CharacterList from './components/CharacterList'

function App() {
  const { data, loading, error } = useFetch('https://rickandmortyapi.com/api/character')
  const characters = data?.results || []

  return (
    <div className="app">
      <main className="app-container">
        <header className="app-header">
          <h1>Rick and Morty - Favoritos</h1>
          <p className="integrantes">Integrantes: Fabian Calderon</p>
        </header>

        {loading && <div className="app-status">Cargando personajes...</div>}
        {error && <div className="app-error">Error: {error}</div>}
        {!loading && !error && <CharacterList characters={characters} />}
      </main>
    </div>
  )
}

export default App