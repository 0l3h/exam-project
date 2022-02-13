import React from 'react'
import Header from './../../components/Header/Header'
import Footer from './../../components/Footer/Footer'
import EventsList from './../../components/EventsList/EventsList'
import OutdatedEvents from '../../components/OutdatedEvents/OutdatedEvents'
import EventForm from '../../components/EventForm/EventForm'
import styles from './Events.module.sass'

function Events () {
  return (
    <>
      <Header />
      <div className={styles.eventsPage}>
        <EventForm />
        <OutdatedEvents />
        <EventsList />
      </div>
      <Footer />
    </>
  )
}

export default Events
