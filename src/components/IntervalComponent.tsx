import { useState, useEffect } from 'react'

const IntervalComponent = () => {
  const [number, setNumber] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber(prev => prev + 1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div>{number}</div>
  )
}

export default IntervalComponent