import React, { useContext, useReducer } from 'react'
import { UserContext } from './index'

const initialState = {
  count: 0
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + 1
      }
    case 'decrement':
      return {
        count: state.count - 1
      }
    case 'reset ':
    default:
      return initialState
  }
}

export default function App() {
  const value = useContext(UserContext)

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      Count:{state.count}
      <button
        className="p-1 border"
        onClick={() => dispatch({ type: 'increment' })}
      >
        Increment
      </button>
      <button
        className="p-1 border"
        onClick={() => dispatch({ type: 'decrement' })}
      >
        Decrement
      </button>
      <button
        className="p-1 border"
        onClick={() => dispatch({ type: 'reset' })}
      >
        Reset
      </button>
    </div>
  )
}
