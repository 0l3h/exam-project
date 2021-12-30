import React, { useState } from 'react'
import { formatDuration, intervalToDuration } from 'date-fns'
import styles from './Event.module.sass'

function Event (props) {
  const { eventName, eventDate } = props

  const duration = intervalToDuration({
    start: Date.now(),
    end: eventDate
  })

  return (
    <div className={styles.event}>
      <span className={styles.eventName}>{eventName}</span>
      <span className={styles.remainingTime}>{formatDuration(duration)}</span>
    </div>
  )
}

export default Event
