import React, { useState, useEffect } from 'react'
import { addSeconds, formatDuration, intervalToDuration } from 'date-fns'
import { toast } from 'react-toastify'
import EventNotification from '../EventNotification/EventNotification'

import styles from './Event.module.sass'

function Event (props) {
  const { id, eventName, eventDate, timeAmount, deleteEvent } = props
  console.log(`Event id`, id)
  const [currentTime, setCurrentTime] = useState(Date.now())
  const [hasTimeExpired, setHasTimeExpired] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(currentTime => new Date(addSeconds(currentTime, 1)))
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const eventAlert = () => {
    toast.error(<EventNotification />, {
      position: toast.POSITION.TOP_CENTER
    })
  }

  if (eventDate - currentTime <= 0 && !hasTimeExpired) {
    deleteEvent(id)
    eventAlert()
    setHasTimeExpired(true)
  }

  const timerStyles = {
    width: `${(100 * (timeAmount - (eventDate - currentTime))) / timeAmount}%`
  }
  console.log(`timerStyles.width`, timerStyles.width)

  const duration = intervalToDuration({
    start: currentTime,
    end: eventDate
  })

  return (
    <>
      <div className={styles.event}>
        <div className={styles.timerStyles} style={timerStyles}></div>
        <span className={styles.eventName}>{eventName}</span>
        <span className={styles.remainingTime}>{formatDuration(duration)}</span>
      </div>
    </>
  )
}

export default Event
