import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { createComment } from '../redux/actions'
import Form from './form'

const CreateComment = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    document.addEventListener('keydown', keydownHandler)
    return () => {
      document.removeEventListener('keydown', keydownHandler)
    }
  }, [])
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm()

  const onSubmit = (data, e) => {
    reset({
      name: data.name,
    })
    dispatch(createComment({ ...data, date: new Date() }))
  }
  const validation = /^[a-zA-Z0-9 _]*$/

  const keydownHandler = (e) => {
    if (e.code === 'Enter' && e.ctrlKey) handleSubmit(onSubmit)()
  }

  return (
    <Form
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      errors={errors}
      register={register}
      validation={validation}
    />
  )
}
export default CreateComment
