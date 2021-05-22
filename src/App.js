import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchComments } from './redux/actions'
import Home from './pages/Home'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchComments())
  }, [])

  return (
    <div className="App">
      <Home />
    </div>
  )
}

export default App
