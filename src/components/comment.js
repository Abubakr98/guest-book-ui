import React from 'react'
import PropTypes from 'prop-types'

const comment = ({ name, message }) => {
  return (
    <div className="comment card">
      <div className="card-body">
        <h5 className="comment__name card-title">{name}</h5>
        <p className="comment__message card-text">{message}</p>
      </div>
    </div>
  )
}
comment.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
}
export default comment
