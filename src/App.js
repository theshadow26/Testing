import React, { useEffect, useState } from 'react'
import { Button, FormControl, InputLabel, Input } from '@material-ui/core'
import './App.css'
import Todo from './Todo'
import db from './firebase'
import firebase from 'firebase'

function App () {
  // when the app laod, we neef to listen to the databse and fetch new todos as they gt added or removed
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    // this code here.. fire when the app load
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
      console.log('🚀 ~ file: App.js ~ line 16 ~ db.collection ~ snapshot.docs.map(doc => doc.data().todo)', snapshot.docs.map(doc => doc.data().todo))
    })
    // will run once if empty , if set input will run every input changes
  }, [])

  const addTodo = (e) => {
    e.preventDefault()
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    console.log('🚀 ~ file: App.js ~ line 27 ~ db.collection ~ firebase.firestore.FieldValue.serverTimestamp', firebase.firestore.FieldValue.serverTimestamp())

    // setTodos([...todos, input])
    setInput('')
  }
  return (
    <div className='App'>
      <h1>hello Clever Program </h1>
      <form>
        <FormControl>
          <InputLabel>Email address</InputLabel>
          <Input onChange={e => setInput(e.target.value)} value={input} />
        </FormControl>
        <Button variant='contained' disabled={!input} onClick={addTodo} color='primary'>
          Add todo
        </Button>
        {/* <button onClick={addTodo}>ADD TODO</button> */}
      </form>

      <ul>
        {todos.map(todo => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  )
}

export default App
