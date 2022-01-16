import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Formik } from 'formik'
import Schems from './../../validators/validationSchems'
import Header from './../../components/Header/Header'
import Footer from './../../components/Footer/Footer'
import styles from './Events.module.sass'
import EventsList from './../../components/EventsList/EventsList'

function Events () {
  const [events, setEvents] = useState(
    JSON.parse(localStorage.getItem('events')) || []
  )

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events))

    return () => {
      // console.log(`localStorage`, localStorage.getItem('events'))
      localStorage.clear()
    }
  }, [events])

  const initialValues = {
    eventName: '',
    eventDate: '',
    eventTime: '',
    remindTime: ''
  }

  const deleteEvent = id => {
    setEvents(() => events.filter(event => event.id !== id))
  }

  const submitEvent = (values, { resetForm }) => {
    const { eventName, eventDate, eventTime } = values

    const id = uuidv4()

    setEvents(events => {
      return [
        ...events,
        {
          id,
          eventName,
          eventDate: Date.parse(`${eventDate}T${eventTime}`),
          timeAmount: Date.parse(`${eventDate}T${eventTime}`) - Date.now()
        }
      ].sort(sortingFunction)
    })

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
          validationSchema={Schems.EventsSchema}
          onSubmit={submitEvent}
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
        <div className={styles.outdatedEvents}>
          <h1>Outdated events</h1>
        </div>
        <div className={styles.events}>
          <div className={styles.eventsHeader}>
            <h1>Live upcomming checks</h1>
            <span>Remaining time</span>
          </div>
          <hr />
          <EventsList {...{ events }} deleteEvent={deleteEvent} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Events
