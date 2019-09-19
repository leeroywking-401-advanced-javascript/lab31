import React, {useState, useEffect, useReducer} from 'react';
import Title from './components/title/title.js';

// State Only
// import ToDo from './components/todo/todo.js';

// API Connected (Live Data)
import ToDo from './components/todo/todo-connected.js';

function reducer(state, action){
  switch (action.type){
    case 'enter':
      return ([...state, state.words = action.payload.toUpperCase()])
    case 'reset':
      return (state = '')
  }
}

let initialState = ''
let state = {}
state.words = 'default words in state'




function App(){
  const [input, setInput] = useState(initialState)
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() =>{
    const handleTitle = (words) => {
      document.title = words
    }
    window.addEventListener('title', handleTitle(state.words))
    return () =>  window.removeEventListener('title', handleTitle(state.words))
  })
  function _handleChange(e,input){
    e.preventDefault()
    console.log(e.target.value)
    setInput(e.target.value)
  }
  return (
    <>
  <ToDo/>
  <Title title={state.words}/>
  <form onSubmit={(e)=> _handleChange(e)}><input ></input><button>push</button></form>
  </>
  )
}

export default App