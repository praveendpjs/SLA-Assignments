import { useEffect, useState } from 'react'

function Task8_SearchAPI() {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Only fetch if search term is not empty
    if (!searchTerm.trim()) {
      setResults(null)
      return
    }

    // Debounce: wait a bit before fetching
    const timeoutId = setTimeout(() => {
      const fetchData = async () => {
        try {
          setLoading(true)
          // Using a public API for demonstration
          const response = await fetch(`https://api.github.com/search/users?q=${searchTerm}&per_page=5`)
          
          if (!response.ok) {
            throw new Error('Failed to fetch')
          }
          
          const data = await response.json()
          setResults(data.items || [])
        } catch (err) {
          console.error('Error fetching:', err)
          setResults([])
        } finally {
          setLoading(false)
        }
      }

      fetchData()
    }, 500) // Wait 500ms after user stops typing

    // Cleanup: cancel the timeout if search term changes before timeout completes
    return () => {
      clearTimeout(timeoutId)
    }
  }, [searchTerm]) // Runs whenever searchTerm changes

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h2>Task 8: Search Input with API Fetch</h2>
      <p>Type a GitHub username to search (e.g., "octocat", "gaearon"):</p>
      
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search GitHub users..."
        style={{ padding: '8px', width: '300px' }}
      />

      {loading && <p>Searching...</p>}

      {results && results.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h3>Results:</h3>
          <ul>
            {results.map((user) => (
              <li key={user.id}>
                <img 
                  src={user.avatar_url} 
                  alt={user.login}
                  style={{ width: '30px', height: '30px', borderRadius: '50%', verticalAlign: 'middle', marginRight: '10px' }}
                />
                {user.login}
              </li>
            ))}
          </ul>
        </div>
      )}

      {results && results.length === 0 && !loading && (
        <p>No results found</p>
      )}
    </div>
  )
}

export default Task8_SearchAPI


