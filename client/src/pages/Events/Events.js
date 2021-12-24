import React, { useState } from 'react'
import { Form, Field, Formik } from 'formik'
import * as yup from 'yup'
import Header from './../../components/Header/Header'
import Footer from './../../components/Footer/Footer'
import styles from './Events.module.sass'

function Events () {
  const [events, setEvents] = useState([])

  const remainingTime_1 = new Date()
  const remainingTime_2 = new Date()
  const remainingTime_3 = new Date()
  const remainingTime_4 = new Date()
  const remainingTime_5 = new Date()
  const remainingTime_6 = new Date()
  const remainingTime_7 = new Date()
  const remainingTime_8 = new Date()
  const remainingTime_9 = new Date()

  const initialValues = {
    eventName: ''
  }

  const schema = yup.object().shape({
    eventName: yup
      .string()
      .min(1, 'Field cannot be empty')
      .max(50, 'Event name must be less than 60 characters')
      .required()
  })

  const submitEvent = values => {}

  return (
    <>
      <Header />
      <div className={styles.eventsPage}>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={submitEvent}
        >
          <Form className={styles.eventInput}>
            <span>Event name</span>
            <Field name='eventName' />

            <span>Date</span>
            <Field name='eventName' />

            <span>Event name</span>
            <Field name='eventName' />

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
            <div className={styles.event}>
              1<span>{remainingTime_1}</span>
            </div>
            <div className={styles.event}>
              2<span>{remainingTime_2}</span>
            </div>
            <div className={styles.event}>
              3<span>{remainingTime_3}</span>
            </div>
            <div className={styles.event}>
              4<span>{remainingTime_4}</span>
            </div>
            <div className={styles.event}>
              5<span>{remainingTime_5}</span>
            </div>
            <div className={styles.event}>
              6<span>{remainingTime_6}</span>
            </div>
            <div className={styles.event}>
              7<span>{remainingTime_7}</span>
            </div>
            <div className={styles.event}>
              8<span>{remainingTime_8}</span>
            </div>
            <div className={styles.event}>
              9<span>{remainingTime_9}</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Events
