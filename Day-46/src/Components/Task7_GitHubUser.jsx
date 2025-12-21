import { useEffect, useState } from 'react'

function Task7_GitHubUser() {
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Fetch GitHub user data when component mounts
    const fetchUser = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://api.github.com/users/octocat')
        
        if (!response.ok) {
          throw new Error('Failed to fetch user data')
        }
        
        const data = await response.json()
        setUserData(data)
        setError(null)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, []) // Empty array means this runs only once on mount

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h2>Task 7: Fetch GitHub User Data on Mount</h2>
      
      {loading && <p>Loading...</p>}
      
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      
      {userData && (
        <div>
          <img 
            src={userData.avatar_url} 
            alt={userData.name || userData.login}
            style={{ width: '100px', height: '100px', borderRadius: '50%' }}
          />
          <p><strong>Name:</strong> {userData.name || userData.login}</p>
          <p><strong>Username:</strong> {userData.login}</p>
          <p><strong>Bio:</strong> {userData.bio || 'No bio available'}</p>
        </div>
      )}
    </div>
  )
}

export default Task7_GitHubUser

