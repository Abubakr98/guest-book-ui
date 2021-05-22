import React from 'react'
import { useSelector } from 'react-redux'
import Comment from './comment'
import { Loader } from './loader'

const Comments = () => {
  const comments = useSelector((state) => state.comments.comments)
  const loading = useSelector((state) => state.app.loading)

  if (loading) return <Loader />

  return (
    <div className="comments">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="comments-main">
              {comments.length ? (
                comments.map((comment) => (
                  <Comment key={comment._id} {...comment} />
                ))
              ) : (
                <h4>no messages(</h4>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comments
