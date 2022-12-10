import { useState, useEffect } from 'react';

const EventListenersComponent = () => {
  const [state, setState] = useState(0);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    }
  }, [state])

  const handleMouseMove = (e: MouseEvent) => {
    console.log(e.screenX)
  }

  return (
    <>
      <h2>EventListenersComponent</h2>
      <p>{state}</p>
      <button 
        onClick={e => {
          setState(prev => prev + 1)
        }}>
        Increment state
      </button>
    </>
  )
}

export default EventListenersComponent
