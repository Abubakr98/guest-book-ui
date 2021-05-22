import React from 'react'
import PropTypes from 'prop-types'

const Alert = ({ type, text }) => {
  return (
    <div className={`alert alert-${type}`} role="alert">
      {text}
    </div>
  )
}
Alert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['danger', 'success']).isRequired,
}

export default Alert
