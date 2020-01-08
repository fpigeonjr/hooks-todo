import React, { useState, useEffect, useContext } from 'react'
import TodosContext from '../context'

export default function TodoForm() {
  const [todo, setTodo] = useState('')
  const {
    state: { currentTodo = {} },
    dispatch
  } = useContext(TodosContext)

  useEffect(() => {
    if (currentTodo.text) {
      setTodo(currentTodo.text)
    }
  }, [currentTodo.id])

  const handleSubmit = e => {
    e.preventDefault()
    if (currentTodo.text) {
      dispatch({ type: 'UPDATE_TODO', payload: todo })
    } else {
      dispatch({ type: 'ADD_TODO', payload: todo })
    }
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
