import { useState, useEffect } from "react"

const AbortControllerComponent = () => {
  // test throttling Slow 3G
  const [id, setId] = useState(1)
  const [user, setUser] = useState({ name: '' })

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { signal })
      .then(res => res.json())
      .then(data => { setUser(data) })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('cancelled!')
          controller.abort()
        } else {
          // handle error
        }
      })

    return () => {
      controller.abort()
    }
  }, [id])

  return (
    <>
      <p>Name: {user.name}</p>
      <button type="button" onClick={() => setId(1)}>fetch id: 1</button>
      <button type="button" onClick={() => setId(2)}>fetch id: 2</button>
      <button type="button" onClick={() => setId(3)}>fetch id: 3</button>
    </>
  )
}

export default AbortControllerComponent