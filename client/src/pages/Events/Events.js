import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { format } from 'date-fns'
import { Form, Field, Formik, ErrorMessage } from 'formik'
import * as yup from 'yup'
import Header from './../../components/Header/Header'
import Footer from './../../components/Footer/Footer'
import styles from './Events.module.sass'
import EventsList from './EventsList/EventsList'

function Events () {
  const [events, setEvents] = useState([])

  const initialValues = {
    eventName: '',
    eventDate: '',
    eventTime: '',
    remindTime: ''
  }

  const schema = yup.object().shape({
    eventName: yup
      .string()
      .max(50, 'Event name must be less than 60 characters')
      .required('Field cannot be empty'),
    eventDate: yup
      .date()
      .min(format(Date.now(), 'yyyy-MM-dd'))
      .required('Field cannot be empty'),
    eventTime: yup.string().required('Field cannot be empty'),
    remindTime: yup.string().required('Field cannot be empty')
  })

  const sortingFunction = (eventLeft, eventRight) => {
    if (eventLeft.eventDate < eventRight.eventDate) {
      return -1
    }
    if (eventLeft.eventDate > eventRight.eventDate) {
      return 1
    }
    return 0
  }

  const submitEvent = (values, { resetForm }) => {
    const { eventName, eventDate, eventTime } = values

    const id = uuidv4()
    localStorage.setItem(
      `intervalTime${id}`,
      new Date(Date.parse(`${eventDate}T${eventTime}`)) - Date.now()
    )

    setEvents(events =>
      [
        ...events,
        {
          id,
          eventName,
          eventDate: new Date(Date.parse(`${eventDate}T${eventTime}`))
        }
      ].sort(sortingFunction)
    )

    resetForm()
  }

  return (
    <>
      <Header />
      <div className={styles.eventsPage}>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={submitEvent}
        >
          <Form className={styles.eventForm}>
            <label className={styles.eventInput}>
              <span>Event name</span>
              <Field type='text' name='eventName' />
              <div className={styles.errorMessage}>
                <ErrorMessage name='eventName' />
              </div>
            </label>

            <label className={styles.eventInput}>
              <span>Event date</span>
              <Field type='date' name='eventDate' />
              <div className={styles.errorMessage}>
                <ErrorMessage name='eventDate' />
              </div>
            </label>

            <label className={styles.eventInput}>
              <span>Event time</span>
              <Field type='time' name='eventTime' />
              <div className={styles.errorMessage}>
                <ErrorMessage name='eventTime' />
              </div>
            </label>

            <label className={styles.eventInput}>
              <span>Remind me in</span>
              <Field type='time' name='remindTime' />
              <div className={styles.errorMessage}>
                <ErrorMessage name='remindTime' />
              </div>
            </label>

            <button type='submit'>submit</button>
          </Form>
        </Formik>
        <div className={styles.events}>
          <div className={styles.eventsHeader}>
            <h1>Live upcomming checks</h1>
            <span>Remaining time</span>
          </div>
          <hr />
          <EventsList {...{ events }} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Events
