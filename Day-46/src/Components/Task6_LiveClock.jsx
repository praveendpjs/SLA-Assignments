import { useEffect, useState } from 'react'

function Task6_LiveClock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    // Set up interval to update time every second
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)

    // Cleanup function - runs when component unmounts or before effect runs again
    return () => {
      clearInterval(intervalId)
      console.log('Clock interval cleaned up')
    }
  }, []) // Empty array means this runs only once on mount

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h2>Task 6: Live Clock with setInterval</h2>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Current Time: {time}</p>
      <p style={{ fontSize: '12px', color: '#666' }}>
        The clock updates every second. Check console when component unmounts to see cleanup.
      </p>
    </div>
  )
}

export default Task6_LiveClock

