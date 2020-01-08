import React from 'react'

const TodosContext = React.createContext({
  todos: [
    {
      id: 1,
      text: 'Eat breakfast',
      complete: false
    },
    {
      id: 2,
      text: 'Brush teeth',
      complete: false
    },
    {
      id: 3,
      text: 'Take out the trash',
      complete: true
    }
  ],
  currentTodo: []
})

export default TodosContext
