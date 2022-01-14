import React from 'react'
import { v4 as uuidv4 } from 'uuid'
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
        events.map(event => <Event key={uuidv4()} {...event} />)
      )}
    </div>
  )
}

export default EventsList
