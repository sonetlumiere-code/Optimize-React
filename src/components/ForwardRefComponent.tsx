import { forwardRef, useRef } from 'react'

const MyInputComponent = forwardRef((props: any, ref: any) => {
  const { value, onChange } = props

  return (
    <input 
      ref={ref} 
      value={value} 
      onChange={onChange} 
    />
  )
})

const ForwardRefComponent = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const focus = () => {
    inputRef.current?.focus()
  }

  const select = () => {
    inputRef.current?.select()
  }

  return (
    <>
      <h2>ForwardRefComponent</h2>
      <MyInputComponent ref={inputRef} />
      <button onClick={focus}>Focus</button>
      <button onClick={select}>Select</button>
    </>
  )
}

export default ForwardRefComponent
