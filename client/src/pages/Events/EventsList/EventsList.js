import React from 'react'
import styles from './EventsList.module.sass'
import Event from '../Event/Event'

function EventsList (props) {
  const { events } = props

  return (
    <div className={styles.eventsList}>
      {events.map((event, index) => (
        <Event key={index} {...event} />
      ))}
    </div>
  )
}

export default EventsList
