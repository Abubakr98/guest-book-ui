import React from 'react'
import PropTypes from 'prop-types'

const Form = ({ register, errors, validation, handleSubmit, onSubmit }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-12 text-center mb-1">
          <h4>Guest book</h4>
        </div>
        <div className="col-xl-12 mb-4">
          <input
            type="text"
            className="form-control form-control-lg"
            name="name"
            placeholder="name"
            {...register('name', {
              required: true,
              pattern: validation,
              validate: {
                isEmpty: (str) => !!str.trim(),
              },
            })}
          />

          <div className="input-error">
            {(errors.name?.type === 'required' ||
              errors.name?.type === 'isEmpty') &&
              'Name is required'}
            {errors.name?.type === 'pattern' &&
              'Use only latin letters, numbers and underscores'}
          </div>
        </div>
        <div className="col-xl-12 mb-3">
          <textarea
            className="form-control form-control-lg"
            name="message"
            placeholder="message"
            rows="3"
            {...register('message', {
              required: true,
              validate: {
                isEmpty: (str) => !!str.trim(),
              },
            })}
          ></textarea>
          <div className="input-error">
            {(errors.message?.type === 'required' ||
              errors.name?.type === 'isEmpty') &&
              'Name is required'}
          </div>
        </div>
        <div className="col-xl-2 col-sm-12 text-center mb-3">
          <button type="submit" className="btn btn-primary btn-lg">
            create
          </button>
        </div>
      </div>
    </form>
  )
}
Form.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object,
  validation: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}
export default Form
