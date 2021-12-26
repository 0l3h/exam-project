import React, { useState, useEffect } from 'react'
import { Form, Field, Formik, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { format, compareDesc } from 'date-fns'
import Header from './../../components/Header/Header'
import Footer from './../../components/Footer/Footer'
import styles from './Events.module.sass'
import Event from './Event/Event'

function Events () {
  const [events, setEvents] = useState([])
  const [dates, setDates] = useState([])

  const currentDate = format(Date.now(), 'yyyy-MM-dd')

  const initialValues = {
    eventName: '',
    eventDate: '',
    eventTime: '',
    remindTime: ''
  }

  // useEffect(() => {
  //   dates.sort(compareDesc)
  // }, events.length)

  const schema = yup.object().shape({
    eventName: yup
      .string()
      .min(1, 'Field cannot be empty')
      .max(50, 'Event name must be less than 60 characters')
      .required(),
    eventDate: yup
      .date()
      .min(currentDate)
      .required(),
    eventTime: yup.string().required(),
    remindTime: yup.string().required()
  })

  const submitEvent = values => {
    console.log(values)
  }

  console.log(`format(Date.now(), 'yyyy')`, format(Date.now(), 'yyyy'))

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
              <ErrorMessage name='eventName' />
            </label>

            <label className={styles.eventInput}>
              <span>Event date</span>
              <Field type='date' name='eventDate' defaultValue={currentDate} />
              <ErrorMessage name='eventDate' />
            </label>

            <label className={styles.eventInput}>
              <span>Event time</span>
              <Field type='time' name='eventTime' />
              <ErrorMessage name='eventTime' />
            </label>

            <label className={styles.eventInput}>
              <span>Before the event, remind me in</span>
              <Field type='time' name='remindTime' />
              <ErrorMessage name='remindTime' />
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
          <div className={styles.eventsList}>
            <Event eventName='Start a Name contest' />
            <Event eventName='Check blacklist' />
            <Event eventName='Edit profile' />
            <Event eventName='Chat a creative' />
            <Event eventName='Report some changes' />
            <Event eventName='Spam-list check on your domain' />
            <Event eventName='HTTP status check on page url' />
            <Event eventName='Server uptime check on hosting provider' />
            <Event eventName='HTTP status check on homepage' />
            <Event eventName='Start a Logo contest' />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Events
