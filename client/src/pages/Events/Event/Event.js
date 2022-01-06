import React, { useState, useEffect } from 'react'
import { addSeconds, formatDuration, intervalToDuration } from 'date-fns'
import styles from './Event.module.sass'

function Event (props) {
  const { id, eventName, eventDate } = props

  const [intervalTime, setIntervalTime] = useState(
    Number(localStorage.getItem(`intervalTime${id}`))
  )
  const [currentTime, setCurrentTime] = useState(Date.now())

  console.log(`intervalTime`, intervalTime)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentTime(new Date(addSeconds(currentTime, 1)))
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [currentTime])

  const timerStyles = {
    width: `${(100 * (intervalTime - (eventDate - currentTime))) /
      intervalTime}%`
  }

  const duration = intervalToDuration({
    start: currentTime,
    end: eventDate
  })

  return (
    <div className={styles.event}>
      <div className={styles.timerStyles} style={timerStyles}></div>
      <span className={styles.eventName}>{eventName}</span>
      <span className={styles.remainingTime}>{formatDuration(duration)}</span>
    </div>
  )
}

export default Event
