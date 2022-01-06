import React from 'react'
import styles from './EventsList.module.sass'
import Event from '../Event/Event'

function EventsList (props) {
  const { events } = props

  return (
    <div className={styles.eventsList}>
      {events.length === 0 ? (
        <div className={styles.emptyList}>
          <b>...</b>
          <span>You have no any events yet</span>
        </div>
      ) : (
        events.map(event => (
          <Event key={event.eventDate + Math.random()} {...event} />
        ))
      )}
    </div>
  )
}

export default EventsList
