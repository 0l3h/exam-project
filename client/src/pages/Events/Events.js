import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { format } from 'date-fns'
import { Formik } from 'formik'
import * as yup from 'yup'
import classNames from 'classnames'
import Header from './../../components/Header/Header'
import Footer from './../../components/Footer/Footer'
import styles from './Events.module.sass'
import EventsList from './EventsList/EventsList'

function Events () {
  const [events, setEvents] = useState([])

  // const onFocusStyles = classNames()

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
      .required('Enter event name'),
    eventDate: yup
      .date()
      .min(format(Date.now(), 'yyyy-MM-dd'))
      .required('Indicate event date'),
    eventTime: yup.string().required('Specify event time'),
    remindTime: yup.string().required('Specify remind time before the event')
  })

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

  const sortingFunction = (eventLeft, eventRight) => {
    if (eventLeft.eventDate < eventRight.eventDate) {
      return -1
    }
    if (eventLeft.eventDate > eventRight.eventDate) {
      return 1
    }
    return 0
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
          {({ errors, touched, getFieldProps, handleSubmit }) => (
            <form className={styles.eventForm} onSubmit={handleSubmit}>
              <label className={`${styles.eventLabel} ${styles.focus}`}>
                <span>Event name</span>

                <input
                  type='text'
                  name='eventName'
                  autoComplete='off'
                  {...getFieldProps('eventName')}
                  placeholder='Event name'
                />
                {touched.eventName && errors.eventName ? (
                  <div className={styles.errorMessage}>{errors.eventName}</div>
                ) : null}
              </label>

              <label className={`${styles.eventLabel} ${styles.focus}`}>
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

              <label className={`${styles.eventLabel} ${styles.focus}`}>
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

              <label className={`${styles.eventLabel} ${styles.focus}`}>
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
        <div className={styles.outdatedEvents}>
          <h1>Outdated events</h1>
        </div>
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
