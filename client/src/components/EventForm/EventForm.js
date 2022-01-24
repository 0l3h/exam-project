import React from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { Formik } from 'formik'
import { addNewEvent } from './../../actions/actionCreator'
import Schems from './../../validators/validationSchems'
import styles from './EventForm.module.sass'

function EventForm (props) {
  const dispatch = useDispatch()

  const initialValues = {
    eventName: '',
    eventDate: '',
    eventTime: '',
    remindTime: ''
  }

  const addEvent = ({ eventName, eventDate, eventTime }, { resetForm }) => {
    const id = uuidv4()
    const eventDateTime = Date.parse(`${eventDate}T${eventTime}`)

    dispatch(
      addNewEvent({
        id,
        eventName,
        eventDate: eventDateTime,
        timeAmount: eventDateTime - Date.now()
      })
    )

    resetForm()
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Schems.EventsSchema}
      onSubmit={addEvent}
    >
      {({ errors, touched, getFieldProps, handleSubmit }) => (
        <form className={styles.eventForm} onSubmit={handleSubmit}>
          <label className={styles.eventInput}>
            <span>Event name</span>

            <input
              type='text'
              name='eventName'
              autoComplete='off'
              {...getFieldProps('eventName')}
            />
            {touched.eventName && errors.eventName ? (
              <div className={styles.errorMessage}>{errors.eventName}</div>
            ) : null}
          </label>

          <label className={styles.eventInput}>
            <span>Event date</span>

            <input
              type='date'
              name='eventDate'
              autoComplete='off'
              {...getFieldProps('eventDate')}
            />
            {touched.eventDate && errors.eventDate ? (
              <div className={styles.errorMessage}>{errors.eventDate}</div>
            ) : null}
          </label>

          <label className={styles.eventInput}>
            <span>Event time</span>

            <input
              type='time'
              name='eventTime'
              autoComplete='off'
              {...getFieldProps('eventTime')}
            />
            {touched.eventTime && errors.eventTime ? (
              <div className={styles.errorMessage}>{errors.eventTime}</div>
            ) : null}
          </label>

          <label className={styles.eventInput}>
            <span>Remind me in</span>

            <input
              type='time'
              name='remindTime'
              autoComplete='off'
              {...getFieldProps('remindTime')}
            />
            {touched.remindTime && errors.remindTime ? (
              <div className={styles.errorMessage}>{errors.remindTime}</div>
            ) : null}
          </label>

          <button type='submit'>Add</button>
        </form>
      )}
    </Formik>
  )
}

export default EventForm
