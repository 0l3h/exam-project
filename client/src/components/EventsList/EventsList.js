import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useSelector } from 'react-redux'
import styles from './EventsList.module.sass'
import Event from '../Event/Event'

function EventsList (props) {
  const events = useSelector(({ eventsStore: { events } }) => events)

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events))

    return () => {
      localStorage.clear()
    }
  }, [events])

  return (
    <div className={styles.events}>
      <div className={styles.eventsHeader}>
        <h1>Live upcomming checks</h1>
        <span>Remaining time</span>
      </div>
      <hr />
      <div className={styles.eventsList}>
        {events.length === 0 ? (
          <div className={styles.emptyList}>
            <b>...</b>
            <span>You have no any events yet</span>
          </div>
        ) : (
          events.map(event => <Event key={uuidv4()} {...event} />)
        )}
      </div>
    </div>
  )
}

export default EventsList
