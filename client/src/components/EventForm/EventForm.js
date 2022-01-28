import React from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { Formik } from 'formik'
import { hoursToMilliseconds, minutesToMilliseconds } from 'date-fns'
import { addNewEvent } from './../../actions/actionCreator'
import Input from './Input/Input'
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

  const addEvent = (
    { eventName, eventDate, eventTime, remindTime },
    { resetForm }
  ) => {
    const id = uuidv4()
    const eventDateTime = Date.parse(`${eventDate}T${eventTime}`)

    dispatch(
      addNewEvent({
        id,
        eventName,
        eventDate: eventDateTime,
        timeAmount: eventDateTime - Date.now(),
        remindTime:
          hoursToMilliseconds(remindTime.substring(0, 2)) +
          minutesToMilliseconds(remindTime.substring(3))
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
      {formikBag => (
        <form className={styles.eventForm} onSubmit={formikBag.handleSubmit}>
          <Input
            inputType='text'
            inputName='eventName'
            label='Event name'
            formikBag={formikBag}
          />

          <Input
            inputType='date'
            inputName='eventDate'
            label='Event date'
            formikBag={formikBag}
          />

          <Input
            inputType='time'
            inputName='eventTime'
            label='Event time'
            formikBag={formikBag}
          />

          <Input
            inputType='time'
            inputName='remindTime'
            label='Remind me in'
            formikBag={formikBag}
          />

          <button type='submit'>Add</button>
        </form>
      )}
    </Formik>
  )
}

export default EventForm
