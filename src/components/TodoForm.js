import React, { useState, useContext } from 'react'
import TodosContext from '../context'

export default function TodoForm() {
  const [todo, setTodo] = useState('')
  const { dispatch } = useContext(TodosContext)

  const handleSubmit = e => {
    e.preventDefault()
    dispatch({ type: 'ADD_TODO', payload: todo })
    setTodo('')
  }

  return (
    <form className="flex justify-center p-5" onSubmit={handleSubmit}>
      <input
        type="text"
        className="border-black border-solid border-2"
        onChange={e => setTodo(e.target.value)}
        value={todo}
      />
    </form>
  )
}
