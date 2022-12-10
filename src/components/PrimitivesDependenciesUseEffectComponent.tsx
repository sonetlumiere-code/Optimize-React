import { useEffect, useState } from 'react'

const PrimitivesDependenciesUseEffectComponent = () => {
  const [name, setName] = useState('')
  const [state, setState] = useState({
    name: '',
    selected: false
  })

  // WRONG
  // useEffect(() => {
  //   console.log('The state has changed, useEffect runs!')
  // }, [state])

  // GOOD
    useEffect(() => {
    console.log('The state has changed, useEffect runs!')
  }, [state.name, state.selected])

  const handleAdd = () => {
    setState(prev => ({ ...prev, name }))
  }

  const handleSelect = () => {
    setState(prev => ({ ...prev, selected: true }))
  }

  return (
    <>
      <h2>Use only primitive values as dependencies of useEffect</h2>
      <input type="text" onChange={e => setName(e.target.value)}/>
      <button onClick={handleAdd}>Add Name</button>
      <button onClick={handleSelect}>Select</button>
      {
        `{
          name: ${state.name}
          selected: ${state.selected.toString()}
        }`
      }
    </>
  )
}

export default PrimitivesDependenciesUseEffectComponent
