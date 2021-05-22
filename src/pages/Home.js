import React from 'react'
import { useSelector } from 'react-redux'

import CreateComment from '../components/createComment'
import Comments from '../components/comments'
import Alert from '../components/alert'

function Home() {
  const alert = useSelector((state) => state.app.alert)
  return (
    <div className="main">
      <div className="container">
        <div className="row justify-content-center p-3">
          <div className="col-xl-4">
            <CreateComment />
          </div>
          <div className="col-xl-8">
            <Comments />
          </div>
          <div className="alert-message">
            {alert.text && <Alert {...alert} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
