import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { format, addYears, isBefore, isValid } from 'date-fns'
import { Formik } from 'formik'
import * as yup from 'yup'
import Header from './../../components/Header/Header'
import Footer from './../../components/Footer/Footer'
import styles from './Events.module.sass'
import EventsList from './../../components/EventsList/EventsList'

function Events () {
  const [events, setEvents] = useState([])

  const initialValues = {
    eventName: '',
    eventDate: '',
    eventTime: '',
    remindTime: ''
  }

  const regexp = /\d{2}:\d{2}/

  const schema = yup.object().shape({
    eventName: yup
      .string()
      .matches(/\S+/, 'Event name cannot include space characters only')
      .max(50, 'Event name must be less than 50 characters')
      .required('Enter event name'),
    eventDate: yup
      .date()
      .min(
        format(Date.now(), 'yyyy-MM-dd'),
        'Event date must be later than or equal to current date'
      )
      .max(
        format(addYears(Date.now(), 1), 'yyyy-MM-dd'),
        'Event must occur in less than one year'
      )
      .required('Indicate event date'),
    eventTime: yup
      .string()
      .required('Specify event time')
      .when('eventDate', {
        is: eventDate => isValid(eventDate),
        then: yup
          .string()
          .test(
            'is-time-valid',
            'Event time must be later than current time',
            (time, { parent: { eventDate } }) =>
              isBefore(
                Date.now(),
                Date.parse(`${format(eventDate, 'yyyy-MM-dd')}T${time}`)
              )
          )
      }),
    remindTime: yup
      .string()
      .required('Specify remind time before the event')
      .when('eventTime', {
        is: eventTime => {
          return regexp.test(eventTime)
        },
        then: yup
          .string()
          .test(
            'is-remind-time-valid',
            'Specify remind time in proper interval',
            (time, { parent: { eventDate, eventTime } }) => {
              if (regexp.test(time)) {
                const timeInMinutes =
                  time.substring(0, 2) * 60 + time.substring(3)
                return true
              }
            }
          )
      })
  })

  const submitEvent = (values, { resetForm }) => {
    const { eventName, eventDate, eventTime } = values

    const id = uuidv4()
    localStorage.setItem(
      `timeAmount${id}`,
      Date.parse(`${eventDate}T${eventTime}`) - Date.now()
    )

    setEvents(events =>
      [
        ...events,
        {
          id,
          eventName,
          eventDate: Date.parse(`${eventDate}T${eventTime}`)
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
          <EventsList {...{ events }} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Events
