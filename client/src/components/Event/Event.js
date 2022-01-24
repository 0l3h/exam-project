import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addSeconds, formatDuration, intervalToDuration } from 'date-fns'
import { toast } from 'react-toastify'
import PropTypes from 'prop-types'
import { addOutdatedEvent, deleteEvent } from './../../actions/actionCreator'
import EventNotification from '../EventNotification/EventNotification'
import styles from './Event.module.sass'

function Event (props) {
  const { id, eventName, eventDate, timeAmount } = props
  const [currentTime, setCurrentTime] = useState(Date.now())
  const [hasTimeExpired, setHasTimeExpired] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(currentTime => new Date(addSeconds(currentTime, 1)))
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    if (eventDate - currentTime <= 0 && !hasTimeExpired) {
      setHasTimeExpired(true)
      dispatch(deleteEvent({ id }))
      dispatch(addOutdatedEvent({ id, eventName }))
      eventAlert()
    }
  }, [currentTime])

  const eventAlert = () => {
    toast.error(<EventNotification />, {
      position: toast.POSITION.TOP_CENTER
    })
  }

  const timerStyles = {
    width: `${(100 * (timeAmount - (eventDate - currentTime))) / timeAmount}%`
  }

  const duration = intervalToDuration({
    start: currentTime,
    end: eventDate
  })

  return (
    <div className={styles.event}>
      <div className={styles.timer} style={timerStyles}></div>
      <span className={styles.eventName}>{eventName}</span>
      <span className={styles.remainingTime}>{formatDuration(duration)}</span>
    </div>
  )
}

Event.propTypes = {
  id: PropTypes.string.isRequired,
  eventName: PropTypes.string.isRequired,
  eventDate: PropTypes.number.isRequired,
  timeAmount: PropTypes.number.isRequired
}

export default Event
