import { useState, useEffect } from 'react'

export function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!url) return

    setLoading(true)
    setError(null)
    setData(null)

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error HTTP ${response.status}`)
        }
        return response.json()
      })
      .then((json) => {
        setData(json)
      })
      .catch((err) => {
        setError(err.message || 'Error al cargar datos')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [url])

  return { data, loading, error }
}
